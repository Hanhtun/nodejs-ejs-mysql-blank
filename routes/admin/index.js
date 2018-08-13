var express = require('express');
var router = express.Router();


router.use(function (req, res, next) {
  if(req.session.user.role == 'ADMIN'){
    next();
  }else{
    req.flash('warning', 'Not allowed user! Please login with admin');
    res. redirect('/signin')
  }
});

router .get('/', function (req, res) {
  res.render('admin/home', {title:'Admin home'})
});

module.exports = router;
