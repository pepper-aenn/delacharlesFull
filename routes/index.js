var express = require('express');
var router = express.Router();

var landingpageData = require('../data/landingpage_data.json');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('layoutStart', { title: 'Express', landingpageData });
});

module.exports = router;
