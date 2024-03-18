var express = require('express');
var router = express.Router();
var projectCardSkateboardingData = require('../public/data/projectcard_skateboarding_data.json');

/* GET fashion page. */
router.get('/', (req, res) => {
  res.render('skateboarding', { title: 'SkateboardingPage', projectCardSkateboardingData });
});

module.exports = router;
