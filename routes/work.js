var express = require('express');
var router = express.Router();
const path = require('path');

// Load JSON data with a correct relative path
var projectCardFashionData = require('../public/data/projectcard_fashion_data.json');

/* GET fashion page. */
router.get('/', (req, res) => {
  res.render('work', { title: 'WorkPage', projectCardFashionData });
});

module.exports = router;
