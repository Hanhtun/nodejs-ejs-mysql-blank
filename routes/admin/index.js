var express = require('express');
var router = express.Router();

router .get('/', function (req, res) {
  res.render('admin/home', {title:'Admin home'})
});

module.exports = router;
