let mongo = require("mongodb");
const config = require("../config/config");
const async = require("async");
const booksDao = require("./booksDao")

module.exports.getConnection = () => {
  return new Promise((resolve, reject) => {
    mongo.connect(
      config.mongoURL,
      {
        useUnifiedTopology: true,
        useNewUrlParser: true,
      },
      function (err, connection) {
        if (err) {
          console.error("Error connecting to mongoDb Cliend");
          reject(err);
        } else {
          resolve(connection);
        }
      }
    );
  });
};

module.exports.closeConnection = (connection) => {
  return new Promise((resolve, reject) => {
    connection.close();
    resolve();
  });
};

// Task 1
module.exports.getAuthorWithAwardsGreaterThan = (n) => {
  return new Promise((resolve, reject) => {
    let connectionPromise = this.getConnection();
    connectionPromise
      .then((connection) => {
        let db = connection.db(config.collectionName);
        let authors = db.collection("authors");

        let project1 = {
          $project: {
            _id: true,
            name: true,
            birth: true,
            deth: true,
            contribs: true,
            awards: true,
            totalNoAwards: {
              $cond: {
                if: {
                  $isArray: "$awards",
                },
                then: {
                  $size: "$awards",
                },
                else: 0,
              },
            },
          },
        };

        let project2 = {
          $project: {
            _id: true,
            name: true,
            birth: true,
            deth: true,
            contribs: true,
            awards: true,
          },
        };

        let match1 = {
          $match: {
            totalNoAwards: {
              $gte: parseInt(n),
            },
          },
        };

        return this.performAggregationQuery(
          authors,
          [project1, match1, project2],
          connection
        );
      })
      .then((results) => {
        resolve(results);
      })
      .catch((err) => {
        console.error("Error in getAuthorWithAwardsGreaterThan", err);
      });
  });
};

// Task 2
module.exports.awardGreterThanYear = (year) => {
  return new Promise((resolve, reject) => {
    let connectionPromise = this.getConnection();
    let books;
    connectionPromise
      .then((connection) => {
        let db = connection.db(config.collectionName);
        let authors = db.collection("authors");
        let query = { "awards.year": { $gte: parseInt(year) } };
        return this.performFindQuery(authors, query, connection);
      })
      .then((results) => {
        resolve(results);
      })
      .catch((err) => {
        console.error("Error in awardGreaterThanYear", err);
        reject();
      });
  });
};

// Task 3
module.exports.profitsAndSold = () => {
  return new Promise((resolve, reject) => {
    let connectionPromise = this.getConnection();
    connectionPromise
      .then((connection) => {
        let db = connection.db(config.collectionName);
        books = db.collection("books");

        let lookUp1 = {
          $lookup: {
            from: "authors",
            localField: "authorId",
            foreignField: "_id",
            as: "authors",
          },
        };

        let unwind1 = {
          $unwind: {
            path: "$authors",
          },
        };

        let groups1 = {
          $group: {
            _id: "$authors._id",
            totalBooksSold: {
              $sum: {
                $multiply: ["$price", "$sold"],
              },
            },
            totalSold: {
              $sum: "$sold",
            },
          },
        };

        return this.performAggregationQuery(
          books,
          [lookUp1, unwind1, groups1],
          connection
        );
      })
      .then((results) => {
        resolve(results);
      })
      .catch((err) => {
        console.error("Error in profitandSold", err);
      });
  });
};

// Task 4
module.exports.totalSoldGreatherThanYear = (dateString, price) => {
  return new Promise((resolve, reject) => {
    let connectionPromise = this.getConnection();
    connectionPromise
      .then((connection) => {
        let db = connection.db(config.collectionName);
        books = db.collection("books");
        let lookup1 = {
          $lookup: {
            from: "authors",
            localField: "authorId",
            foreignField: "_id",
            as: "authors",
          },
        };
        let unwind1 = {
          $unwind: {
            path: "$authors",
          },
        };
        let match1 = {
          $match: {
            "authors.birth": {
              $gte: new Date(dateString),
            },
          },
        };

        let group1 = {
          $group: {
            _id: "$authors._id",
            totalSold: {
              $sum: "$price",
            },
          },
        };

        let match2 = {
          $match: {
            totalSold: {
              $gte: parseInt(price),
            },
          },
        };

        return this.performAggregationQuery(
          books,
          [lookup1, unwind1, match1, group1, match2],
          connection
        );
      })
      .then((results) => {
        resolve(results);
      })
      .catch((err) => {
        console.error("Error in totalSoldGreatherThanYear", err);
        reject(err);
      });
  });
};

// Performs aggregate query and closes connection
module.exports.performAggregationQuery = (
  database,
  stagedArray,
  connection
) => {
  return new Promise((resolve, reject) => {
    database.aggregate(stagedArray).toArray(function (err, result) {
      if (err) {
        console.error("Error in performing Aggregation Query", err);
        reject(err);
      } else {
        connection.close();
        resolve(result);
      }
    });
  });
};

// Performs find query and closes connection
module.exports.performFindQuery = (database, query, connection) => {
  return new Promise((resolve, reject) => {
    database.find(query).toArray(function (err, result) {
      if (err) {
        console.error("Error in performing find query");
      } else {
        connection.close();
        resolve(result);
      }
    });
  });
};
