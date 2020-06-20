const booksDao = require("../persistance/booksDao");

// Get authors with awards greater or equal than number
module.exports.getAuthorWithAwardsGreaterThan = (n) => {
    return new Promise((resolve, reject) => {
        let getAuthorWithAwardsGreaterThanPromise =  booksDao.getAuthorWithAwardsGreaterThan(n);
        getAuthorWithAwardsGreaterThanPromise.then((resp) => {
            resolve(resp);
        }).catch((err) => {
            reject(err);
        })
    })
}

// Get authors with awards greater or equal year
module.exports.awardGreterThanYear = (year) => {
    return new Promise((resolve, reject) => {
        let awardGreterThanYearPromise =  booksDao.awardGreterThanYear(year);
        awardGreterThanYearPromise.then((resp) => {
            resolve(resp);
        }).catch((err) => {
            reject(err);
        })
    })
}

module.exports.profitsAndSold = () => {
    return new Promise((resolve, reject) => {
        let profitsAndSoldPromise =  booksDao.profitsAndSold();
        profitsAndSoldPromise.then((resp) => {
            resolve(resp);
        }).catch((err) => {
            reject(err);
        })
    })
}

module.exports.totalSoldGreatherThanYear = (date, price) => {
    return new Promise((resolve, reject) => {
        let totalSoldGreatherThanYearPromise =  booksDao.totalSoldGreatherThanYear(date, price);
        totalSoldGreatherThanYearPromise.then((resp) => {
            resolve(resp);
        }).catch((err) => {
            reject(err);
        })
    })
}

