const booksDao = require("../persistance/booksDao");

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

module.exports.awardGreterThanYear = (date) => {
    return new Promise((resolve, reject) => {
        let awardGreterThanYearPromise =  booksDao.awardGreterThanYear(date);
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

module.exports.totalSoldGreatherThanYear = (date) => {
    return new Promise((resolve, reject) => {
        let totalSoldGreatherThanYearPromise =  booksDao.totalSoldGreatherThanYear(date);
        totalSoldGreatherThanYearPromise.then((resp) => {
            resolve(resp);
        }).catch((err) => {
            reject(err);
        })
    })
}

