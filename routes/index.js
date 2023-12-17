var express = require('express');
var router = express.Router();
const path = require('path');
// const dataPath = path.join(__dirname, '../public/data/landingpage_data.json');
// const landingPageData = require(dataPath);


var landingPageData = require('../public/data/landingpage_data.json');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('layoutStart', { title: 'Express', landingPageData });
});

module.exports = router;
