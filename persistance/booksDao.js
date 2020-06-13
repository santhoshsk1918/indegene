let mongo = require("mongodb");
const config = require("../config/config");
const initialData = require("../config/authos.json");
const async = require("async");

module.exports.getConnection = () => {
  return new Promise((resolve, reject) => {
    mongo.connect(config.mongoURL, function (err, connection) {
      if (err) {
        console.error("Error connecting to mongoDb Cliend");
        reject(err);
      } else {
        resolve(connection.db(config.collectionName));
      }
    });
  });
};

module.exports.closeConnection = (connection) => {
  return new Promise((resolve, reject) => {
    connection.close();
    resolve();
  });
};



module.exports.validateAndAddInitialData = () => {
  return new Promise((resolve, reject) => {
    let connectionPromise = this.getConnection();
    let books;
    let authors;
    connectionPromise
      .then((db) => {
        authors = db.collection("authors");
        books = db.collection("books");
        authors.find({}).toArray(function (err, results) {
          if (err) {
            console.error("Error in getting Datafrom books", err);
            reject(err);
          } else {
            if (results.length > 0) {
            } else {
              async.eachSeries(
                initialData,
                function iterator(item, cb) {
                  item.Author_DOB = new Date(item.Author_DOB);
                  authors.insertOne(item, function (err, result) {
                    if (err) {
                      console.error("Erorr in saveAuthor", err);
                      cb();
                    } else {
                      for (let i = 0; i < item.books.length; i++) {
                        let newBook = item.books[i];
                        newBook.Award_Date = new Date(newBook.Award_Date);
                        newBook.authorId = result.insertedId;
                      }
                      books.insertMany(item.books, function (err, result) {
                        if (err) {
                          console.error("Error in inserting Books", err);
                          cb();
                        }
                        cb();
                      });
                    }
                  });
                },
                function (err) {
                  console.log("Addred Authors and Books");
                  resolve();
                  
                }
              );
            }
          }
        });
      })
      .catch((err) => {
        console.error(
          "Error in getting Connection validateAndAddInitialdata",
          err
        );
        reject(err);
      });
  });
};

module.exports.getAuthorWithAwardsGreaterThan = (n) => {
  return new Promise((resolve, reject) => {
    let connectionPromise = this.getConnection();
    connectionPromise.then((db) => {
      authors = db.collection("authors");
      books = db.collection("books");
      let math1 = { $match: { Awards_Won: 1 } };
      let lookUp1 = {
        $lookup: {
          from: "authors",
          localField: "authorId",
          foreignField: "_id",
          as: "author",
        },
      };

      let unwind1 = { $unwind: "$author" };

      let group1 = {
        $group: {
          _id: "$author.Author_Name",
          Author_DOB: { $first: "$author.Author_DOB" },
          awards_won: { $sum: "$Awards_Won" },
        },
      };

      let match2 = {
        $match: {
          awards_won: { $gte: parseInt(n) },
        },
      };

      books
        .aggregate([math1, lookUp1, unwind1, group1, match2])
        .toArray(function (err, result) {
          if (err) {
            console.error("Error in getting authorsWithAwardsGreaterThan", err);
            reject(err);
          } else {
            console.log("-------------------->", result, n);
            resolve(result);
            
          }
        });
    });
  });
};

module.exports.awardGreterThanYear = (date) => {
  return new Promise((resolve, reject) => {
    let connectionPromise = this.getConnection();
    let books;
    let authors;
    connectionPromise.then((db) => {
      let books = db.collection("books");
      let query = { Awards_Won: 1, Award_Date: { $gte: date } };
      books.find(query).toArray(function (err, result) {
        if (err) {
          console.error("Error in awardGreatherThan", err);
          reject(err);
        } else {
          console.log(result);
          resolve(result);
          
        }
      });
    });
  });
};

module.exports.profitsAndSold = () => {
  return new Promise((resolve, reject) => {
    let connectionPromise = this.getConnection();
    connectionPromise.then((db) => {
      authors = db.collection("authors");
      books = db.collection("books");

      let lookUp1 = {
        $lookup: {
          from: "authors",
          localField: "authorId",
          foreignField: "_id",
          as: "author",
        },
      };

      let unwind1 = { $unwind: "$author" };

      let group1 = {
        $group: {
          _id: "$author._id",
          totalBooksSold: { $sum: "$Books_Sold" },
          totalProfit: { $sum: { $multiply: ["$Books_Sold", "$Book_Price"] } },
        },
      };

      books
        .aggregate([lookUp1, unwind1, group1])
        .toArray(function (err, result) {
          if (err) {
            console.error("Error in getting authorsWithAwardsGreaterThan", err);
            reject(err);
          } else {
            console.log("-------------------->", result);
            resolve(result);
            
          }
        });
    });
  });
};

module.exports.totalSoldGreatherThanYear = (date) => {
  return new Promise((resolve, reject) => {
    let connectionPromise = this.getConnection();
    connectionPromise.then((db) => {
      authors = db.collection("authors");
      books = db.collection("books");
      let match1 = {
        $match: { Author_DOB: { $gte: new Date("1991-01-01") } },
      };

      let lookUp1 = {
        $lookup: {
          from: "authors",
          localField: "authorId",
          foreignField: "_id",
          as: "author",
        },
      };

      let unwind1 = { $unwind: "$author" };

      let group1 = {
        $group: {
          _id: "$author._id",
          totalBooksSold: { $sum: "$Book_Price" },
          author_dob: { $first: "$author.Author_DOB" },
        },
      };

      books
        .aggregate([lookUp1, unwind1, group1])
        .toArray(function (err, result) {
          if (err) {
            console.error("Error in getting totalSoldGreatherThanYear", err);
            reject(err);
          } else {
            console.log("-------------------->", result);
            resolve(result);
            
          }
        });
    });
  });
};
