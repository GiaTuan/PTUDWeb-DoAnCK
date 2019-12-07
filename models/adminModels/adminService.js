const pool = require('../../connection')
const passport = require('passport');
const bcrypt = require('bcryptjs');


module.exports.getAdmin = function(req,res,next){
    pool.connect(function(err, client, done){  
        client.query('SELECT adname FROM "Admin" ', function(err, result) 
        {
            done();
           
            let isAdmin;
            for(let i = 0 ; i< result.rows.length; i++)
            {
                if(result.rows[i].adname === req.user)
                {
                    isAdmin = true;  
                    break;
                }
            }
            if(req.isAuthenticated() && isAdmin == true)
            {
                res.render('partials/nav',{layout: 'ad-layout2',adname: req.user});
            }
            else
            {
                res.render('admin/index',{layout: 'ad-layout' });
            }
        });
    });
}

module.exports.signIn = function(req,res,next){
    passport.authenticate('admin-local', function(err, user, info) {
        if (err) 
        {
            return next(err); 
        }
        if (!user) 
        { 
            return res.render('admin/index',{layout: 'ad-layout' ,announce: 'Tài khoản hoặc mật khẩu không chính xác'}); 
        }
        req.logIn(user, function(err) 
        {
            if (err) 
            { 
            return next(err); 
            }
            return res.redirect('/admin');
        });
    })(req, res, next);
}

module.exports.getSignUp = function(req,res,next){
    if(req.isAuthenticated())
    {
        let announce = req.query.announce;
        if(announce === 'existed')
        {
            announce= 'Tài khoản đã tồn tại';
            res.render('admin/signup',{layout: 'ad-layout2',adname: req.user,announce})
        }
        if(announce=== 'success')
        {
            res.render('admin/signup-success',{layout: 'ad-layout2' ,adname: req.user});
        }
        else
        {
            res.render('admin/signup',{layout: 'ad-layout2',adname: req.user})
        }
    }
    else
    {
        res.redirect('/admin')
    }
}

module.exports.postSignUp = function(req,res,next){
    pool.connect(function(err, client, done){  
        client.query('SELECT adname FROM "Admin"  WHERE "adname"='+ '\'' + req.body.username +'\'', function (err, result) {
            if(err){
                return console.log('error running query', err);
            }
            if(result.rows[0] !== undefined)
            {
                if(req.body.username === result.rows[0].adname)
                {
                    res.redirect('/admin/signup?announce='+'existed');
                }
             }
            else
            {
                const password = req.body.password;
                const name = req.body.name;
                const email = req.body.email;
                const address = req.body.address;
                const phone = req.body.phone;
                bcrypt.genSalt(10, function(err, salt) {
                    bcrypt.hash(password, salt, function(err, hash) {
                        client.query('INSERT INTO "Admin" VALUES (' + '\'' + req.body.username+ '\',\'' +hash  + '\',\'' + email + '\',\'' + address + '\',\'' + phone + '\',\'' + name + '\');', function (err, result) {
                            done();
                            if(err){
                                return console.log('error running query', err);
                            }
                            res.redirect('/admin/signup?announce='+'success');
                        });
                    });
                }); 
            }
        });
    });
}

module.exports.getAdInfo = function(req,res,next){
    
    pool.connect(function(err, client, done){  
        client.query('SELECT * FROM "Admin"  WHERE "adname"='+ '\'' + req.user +'\'', function(err, result) 
        {
            done();
            if(req.isAuthenticated())
            {
                res.render('admin/info',{layout: 'ad-layout2', adname: req.user, admin: result });
            }
            else
            {
                res.redirect('/admin')
            }
        });
    });
}


module.exports.logOut = function(req,res,next){
    req.logout();
    res.redirect('/admin');
}

module.exports.getUsers = function(req,res,next){
    pool.connect(function(err, client, done){  
        client.query('SELECT * FROM "Users" ', function(err, result) 
        {
            done();
            if(req.isAuthenticated())
            {
                res.render('admin/user-manage',{layout: 'ad-layout2',user: result , adname: req.user });
            }
            else
            {
                res.redirect('/admin')
            }
        });
    });
}