var express = require('express');
var router = express.Router();



router.use(function (req, res, next) {
  if(req.session.user.role == 'USER'){
    next();
  }else{
    req.flash('warning', 'Not allowed user! Please login with user');
    res. redirect('/signin')
  }
});

router.get('/',function (req, res) {
  res.render('members/home', {title:'Members home'});
});

module.exports = router;
