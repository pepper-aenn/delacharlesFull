var express = require('express');
var router = express.Router();

// Load JSON data with a correct relative path
var projectCardData = require('../data/projectcard_data.json');

/* GET fashion page. */
router.get('/', (req, res) => {
  res.render('fashion', { title: 'FashionPage', projectCardData });
  console.log(projectCardData);
});

module.exports = router;
