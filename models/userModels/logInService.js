var pool=require('../../connection.js');
const passport = require('passport')

module.exports.getLogIn = function(req,res,next){
    res.render('user/login');
}

module.exports.submitLogIn = function(req,res,next){
    passport.authenticate('user-local', function(err, user, info) {
        if (err) 
        {
            return next(err); 
        }
        if (!user) 
        { 
            return res.render('user/login',{announce: 'Tài khoản hoặc mật khẩu không chính xác'}); 
        }
        req.logIn(user, function(err) 
        {
            if (err) 
            { 
            return next(err); 
            }
            return res.redirect('/');
        });
    })(req, res, next);
}

module.exports.getUserInfo =  function(req,res,next){
    pool.connect(function(err, client, done){  
        client.query('SELECT * FROM "Users"  WHERE "account"='+ '\'' + req.user +'\'', function(err, result) 
        {
            done();
            if(req.isAuthenticated())
            {
                res.render('user/info',{layout: 'layout2',user: result , username: req.user });
            }
            else
            {
                res.redirect('/logup');
            }
        });
    });
}