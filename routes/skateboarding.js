var express = require('express');
var router = express.Router();

/* GET contact page. */
router.get('/', (req, res) => {
    res.render('skateboarding', { title: 'Skateboarding Page' });
  });

module.exports = router;
