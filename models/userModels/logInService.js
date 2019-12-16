var pool=require('../../connection.js');
const passport = require('../../passport');
var nodemailer = require('nodemailer');
const bcrypt = require('bcryptjs');
module.exports.getLogIn = function(req,res,next){
    res.render('user/login');
}

module.exports.submitLogIn = function(req,res,next){
    const email = req.body.fpemail;
    if(email !== undefined)
    {   
        ;(async () => {
            const client = await pool.connect();
            try {
                const result = await client.query('SELECT * FROM "Users"  WHERE "email"='+ '\'' + email +'\'');
               
                if(result.rows.length > 0)
                {
                    let tempPass = "PTUDWK17";

                    bcrypt.genSalt(10, function(err, salt) {
                        bcrypt.hash(tempPass, salt, function(err, hash) {
                            client.query('UPDATE "Users" SET "password"='+' \''+ hash + '\''  + 'WHERE "email"='+ '\'' + email +'\'',function(err,result2){
                                if(err)
                                {
                                   return console.log(err);
                                }
                            });
                        });
                    });

                    var transporter = nodemailer.createTransport({
                    service: 'gmail',
                    auth: {
                    user: 'ptudweb123@gmail.com',
                    pass: 'Doanweb123456'
                    }
                    });
                
                    var mailOptions = {
                    from: 'ptudweb123@gmail.com',
                    to: 'tuan0949@gmail.com',
                    subject: 'Lấy lại mật khẩu tài khoản',
                    text: 'Mật khẩu tạm thời của bạn: ' + tempPass
                    };
                
                    transporter.sendMail(mailOptions, function(error, info){
                    if (error) {
                    console.log(error);
                    } 
                    else {
                    console.log('Email sent: ' + info.response);
                    res.redirect('login');
                    }
                    });
                }
                else
                {
                    res.render('user/login',{announce: 'Email vừa nhập chưa được đăng ký tài khoản'});      
                }
            } finally {
              client.release()
            }
        })().catch(err => next(err))
        
    }
    else
    {
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
}

module.exports.getUserInfo =  function(req,res,next){

    ;(async () => {
        const client = await pool.connect();
        try {
            const result = await client.query('SELECT * FROM "Users"  WHERE "account"='+ '\'' + req.user +'\'');
            if(req.isAuthenticated())
            {
                res.render('user/info',{user: result , username: req.user , isLogin: true});
            }
            else
            {
                res.redirect('/logup');
            }        
        } finally {
          client.release()
        }
    })().catch(err => next(err))
}


module.exports.changePassword = function(req,res,next){
    if(req.isAuthenticated())
    {
        res.render('user/change-pw');
    }
    else
    {
        res.redirect('/');
    }  
}

module.exports.submitChangePassword = function(req,res,next)
{
    ;(async () => {
        const client = await pool.connect();
        try {
            const oldpw = req.body.oldpw;
            const newpw =  req.body.newpw;
            const result = await client.query('SELECT password FROM "Users"  WHERE "account"='+ '\'' + req.user +'\'');
            
            
            console.log(result.rows[0].password);
            bcrypt.compare(oldpw,result.rows[0].password,function(err, isCorrect) {
                if(err)
                {
                  return console.log(err);
                }
                if(isCorrect)
                {
                    bcrypt.genSalt(10, function(err, salt) {
                        bcrypt.hash(newpw, salt, function(err, hash) {
                            client.query('UPDATE "Users" SET "password"='+' \''+ hash + '\''  + 'WHERE "account"='+ '\'' + req.user +'\'',function(err,result2){
                                if(err)
                                {
                                   return console.log(err);
                                }
                            });
                        });
                    });
                    res.redirect('user/change-pw',{announce: 'THAY ĐỔI MẬT KHẨU THÀNH CÔNG!'});
                }
                else
                {
                    res.render('user/change-pw',{announce: 'Mật khẩu không chính xác'});
                }
            });
                 
        } finally {
          client.release()
        }
    })().catch(err => next(err))
   
}