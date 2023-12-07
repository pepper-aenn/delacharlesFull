var express = require('express');
var router = express.Router();

// Load JSON data with a correct relative path
var projectCardFashionData = require('../data/projectcard_fashion_data.json');

/* GET fashion page. */
router.get('/', (req, res) => {
  res.render('fashion', { title: 'FashionPage', projectCardFashionData });
  console.log(projectCardData);
});

module.exports = router;
