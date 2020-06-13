var express = require('express');
var router = express.Router();
const authorService = require("../service/authorService");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// TASK1
router.get("/greaterThan", function(req, res) {
  let noOfAwards = req.query.noOfAwards;
  let getGreatherThanPromise = authorService.getAuthorWithAwardsGreaterThan(noOfAwards);
  getGreatherThanPromise.then((resp) => {
    res.send(resp);
    res.end();
  }).catch((err) => {
    res.status(500);
    res.end();
  })
});

// TASK2: 
// Input String year
router.get('/awardGreterThanYear', function(req, res){
  let year = req.query.year;
  let date = new Date(year);
  let getGreatherThanPromise = authorService.awardGreterThanYear(date);
  getGreatherThanPromise.then((resp) => {
    res.send(resp);
    res.end();
  }).catch((err) => {
    res.status(500);
    res.end();
  })

})

// TASK3: 
router.get('/profitsAndSold', function(req, res){
  let profitsAndSoldPromise = authorService.profitsAndSold();
  profitsAndSoldPromise.then((resp) => {
    res.send(resp);
    res.end();
  }).catch((err) => {
    res.status(500);
    res.end();
  })

})

// TASK4: 
// Input String year
router.get('/totalSoldGreatherThanYear', function(req, res){
  let year = req.query.year;
  let date = new Date(year);
  let getGreatherThanPromise = authorService.totalSoldGreatherThanYear(date);
  getGreatherThanPromise.then((resp) => {
    res.send(resp);
    res.end();
  }).catch((err) => {
    res.status(500);
    res.end();
  })
})




module.exports = router;
