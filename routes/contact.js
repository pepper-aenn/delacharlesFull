var express = require('express');
var router = express.Router();

/* GET contact page. */
router.get('/', (req, res) => {
    res.render('contact', { title: 'Contact Page' });
  });

module.exports = router;
