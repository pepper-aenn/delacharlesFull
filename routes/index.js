var express = require('express');
var router = express.Router();
const path = require('path');

// var landingPageData = require('../public/data/landingpage_data.json');

var projectCardFashionData = require('../public/data/projectcard_fashion_data.json');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('work', { title: 'Express', projectCardFashionData });
});

module.exports = router;
