var express = require("express");
var router = express.Router();
const authorService = require("../service/authorService");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

// TASK1 - REST
// @Request: awardGreaterThan
// Input noOfAwards Type: Number
router.get("/awardGreaterThan", function (req, res) {
  let noOfAwards = req.query.noOfAwards;
  if (isNaN(noOfAwards)) {
    res.status(500);
    res.end();
  } else {
    let getGreatherThanPromise = authorService.getAuthorWithAwardsGreaterThan(
      noOfAwards
    );
    getGreatherThanPromise
      .then((resp) => {
        res.send(resp);
        res.end();
      })
      .catch((err) => {
        res.status(500);
        res.end();
      });
  }
});

// TASK2 - REST
// @Request: awardGreterThanYear
// Input 'year' Type: Number
router.get("/awardGreterThanYear", function (req, res) {
  let year = req.query.year;
  if (isNaN(year)) {
    res.status(500);
    res.end();
  } else {
    let getGreatherThanPromise = authorService.awardGreterThanYear(year);
    getGreatherThanPromise
      .then((resp) => {
        res.send(resp);
        res.end();
      })
      .catch((err) => {
        res.status(500);
        res.end();
      });
  }
});

// TASK 3 - REST
// @Request: profitsAndSold
router.get("/profitsAndSold", function (req, res) {
  let profitsAndSoldPromise = authorService.profitsAndSold();
  profitsAndSoldPromise
    .then((resp) => {
      res.send(resp);
      res.end();
    })
    .catch((err) => {
      res.status(500);
      res.end();
    });
});

// TASK2 - REST
// @Request: awardGreterThanYear
// Input 'year' Type: Number
// Input 'price' Type: String (ISO Format)
router.get("/totalSoldGreatherThanDateAndPrice", function (req, res) {
  let date = req.query.date;
  let price = req.query.price
  let getGreatherThanPromise = authorService.totalSoldGreatherThanYear(date, price);
  getGreatherThanPromise
    .then((resp) => {
      res.send(resp);
      res.end();
    })
    .catch((err) => {
      res.status(500);
      res.end();
    });
});

module.exports = router;
