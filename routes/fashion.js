var express = require('express');
var router = express.Router();

/* GET contact page. */
router.get('/', (req, res) => {
    res.render('fashion', { title: 'Fashion Page' });
  });

module.exports = router;
