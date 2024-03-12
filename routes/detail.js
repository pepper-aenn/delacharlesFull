var express = require('express');
var router = express.Router();

const path = require('path');

router.get('/:routeName', (req, res) => {
  const routeName = req.params.routeName;
  const viewPath = path.join(__dirname, '../views/detail', `${routeName}.pug`);
  res.render(viewPath, { title: 'DetailPage', routeName });
});

module.exports = router;
