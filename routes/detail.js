var express = require('express');
var router = express.Router();

const path = require('path');

router.get('/:routeName', (req, res) => {
  const routeName = req.params.routeName;
  const viewPath = path.join(__dirname, '../views/detail', `${routeName}.pug`);

  const jsonDataPath = path.join(__dirname, `../public/data/detail/${routeName}_data.json`);
  const detailData = require(jsonDataPath)

  res.render(viewPath, { title: 'DetailPage', routeName, detailData });
});

module.exports = router;
