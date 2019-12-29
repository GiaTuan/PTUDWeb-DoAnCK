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
                    let tempPass = result.rows[0].account+"_PTUDWK17";

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
                    to: email,
                    subject: 'Lấy lại mật khẩu tài khoản',
                    text: 'Mật khẩu tạm thời của bạn: ' + tempPass + '\n HÃY ĐỔI LẠI MẬT KHẨU KHI ĐĂNG NHẬP TÀI KHOẢN'
                    };
                
                    transporter.sendMail(mailOptions, function(error, info){
                    if (error) 
                    {
                        console.log(error);
                    } 
                    else 
                    {
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
                else
                {
                    ;(async () => {
                        const client = await pool.connect();
                        try {
                            const result = await client.query('SELECT * FROM "Users"  WHERE "account"='+ '\'' + req.user.rows[0].account +'\'');
                            console.log(req.user.rows[0].account);
                            if(result.rows[0].state === "khóa")
                            {
                                return res.render('user/login',{announce: 'Tài khoản đã bị khóa'}); 
                            }
                            else
                            {
                                res.redirect('/');
                            }        
                        } finally {
                        client.release()
                        }
                    })().catch(err => next(err))
                }
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
                res.redirect('/login');
            }        
        } finally {
          client.release()
        }
    })().catch(err => next(err))
}

module.exports.updateInfo = (req,res,next) => {
    ;(async () => {
        const client = await pool.connect();
        try {
            const name = req.body.name;
            const email =req.body.email;
            const phone = req.body.phone;
            const addr= req.body.addr;
            const checkEmail = await client.query('SELECT * FROM "Users"  WHERE "email"='+ '\'' + email +'\'');
            if(checkEmail.rows.length > 0)
            {
                const result = await client.query('SELECT * FROM "Users"  WHERE "account"='+ '\'' + req.user +'\'');
                res.render('user/info',{user: result,announce: 'Email đã tồn tại' , username: req.user , isLogin: true});       
            }
            else
            {
                await client.query("UPDATE \"Users\" SET \"name\" ='" + name + '\',"email"=\''+ email + '\',"address"=\''+ addr + '\',"phone"=\''+ phone + '\' WHERE "account"=' + '\'' + req.user +'\'');      
                const result = await client.query('SELECT * FROM "Users"  WHERE "account"='+ '\'' + req.user +'\'');
                res.render('user/info',{user: result,announce: 'Cập nhật thông tin tài khoản thành công' , username: req.user , isLogin: true});
            }
            
        } finally {
          client.release()
        }
    })().catch(err => next(err))
}


module.exports.changePassword = function(req,res,next){
    if(req.isAuthenticated())
    {
        res.render('user/change-pw',{username: req.user,isLogin: req.isAuthenticated()});
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
                    res.render('user/change-pw',{announce: 'THAY ĐỔI MẬT KHẨU THÀNH CÔNG!',username: req.user,isLogin: req.isAuthenticated()});
                }
                else
                {
                    res.render('user/change-pw',{announce: 'Mật khẩu không chính xác',username: req.user,isLogin: req.isAuthenticated()});
                }
            });
        } finally {
          client.release()
        }
    })().catch(err => next(err))
   
}

module.exports.getOrders = function(req,res,next)
{
    const user = req.user;
    if(req.isAuthenticated())
    {
        ;(async () => {
            const client = await pool.connect();
            try {
                const result = await client.query('SELECT * FROM "Order"  WHERE "username"='+ '\'' + user +'\'');
                res.render('user/order-history',{danhsach: result, username: req.user , isLogin: true});

            } finally {
              client.release()
            }
        })().catch(err => next(err))
    }
    else
    {
        res.redirect('/logup');
    }  
}