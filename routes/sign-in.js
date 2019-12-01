var express = require('express')
const passport = require('passport')
//var bodyParser = require('body-parser')
var pool = require('../connection')
var router = express.Router();
const controller = require('../controllers/index')
//var urlencodedParser = bodyParser.urlencoded({ extended: false })

router.get('/', function(req,res,next){
    res.render('sign-in');
})

router.post('/',function(req,res,next){
  passport.authenticate('local', function(err, user, info) {
    if (err) 
    {
      return next(err); 
    }
    if (!user) 
    { 
      return res.render('/sign-in'); 
    }
    req.logIn(user, function(err) 
    {
      if (err) 
      { 
        return next(err); 
      }
      return res.redirect('/users/' + user.rows[0].account);
    });
  })(req, res, next);
})


module.exports = router;
