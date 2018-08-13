var express = require('express');
var router = express.Router();

router.get('/',function (req, res) {
  res.render('members/home', {title:'Members home'});
});

module.exports = router;
