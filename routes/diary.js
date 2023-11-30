var express = require('express');
var router = express.Router();

/* GET contact page. */
router.get('/', (req, res) => {
    res.render('diary', { title: 'Diary Page' });
  });

module.exports = router;
