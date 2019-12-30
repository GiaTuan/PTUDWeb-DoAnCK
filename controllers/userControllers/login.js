const logInService = require('../../models/userModels/logInService');
const passport = require('../../passport');

module.exports.logIn = (req,res,next)=>{
    res.render('user/login');
}

module.exports.submitLogIn = async (req,res,next)=>{
    const email = req.body.fpemail;
    if(email !== undefined)
    {   
        const result = await logInService.getUserFromEmail(email);
        if(result.rows.length > 0)
        {
           const result = await logInService.sendToEmail(email);
           if(result === 1)
           {
                res.render('user/login',{announce: 'Đã gửi mật khẩu tạm thời đến email vừa nhập. Hãy kiểm tra email!'});      
           }
        }
        else
        {
            res.render('user/login',{announce: 'Email vừa nhập chưa được đăng ký tài khoản'});      
        }
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
                    const account = req.user.rows[0].account;
                    logInService.getStateOfUser(account)
                        .then(result =>{ 
                            if(result === "khóa")
                            {
                                return res.render('user/login',{announce: 'Tài khoản đã bị khóa'}); 
                            }
                            else
                            {
                                res.redirect('/');
                            }      
                        });  
                }
            });
        })(req, res, next);
    }
}

module.exports.getUserInfo = async (req,res,next)=>{
    const user = req.user;
    const result = await logInService.getUserInfo(user);
    if(req.isAuthenticated())
    {
        res.render('user/info',{user: result , username: user , isLogin: true});
    }
    else
    {
        res.redirect('/login');
    }     
}

module.exports.updateInfo = async (req,res,next)=>{
    const user = req.user;
    const name = req.body.name;
    const email =req.body.email;
    const phone = req.body.phone;
    const addr= req.body.addr;
    const result = await logInService.updateInfo(user,name,email,phone,addr);
    if(result[0] === -1)
    {
        res.render('user/info',{user: result[1],announce: 'Email đã tồn tại' , username: user , isLogin: true});       
    }
    else
    {
        res.render('user/info',{user: result[1],announce: 'Cập nhật thông tin tài khoản thành công' , username: user , isLogin: true});
    }
    
}

module.exports.changePassword = (req,res,next)=>{
    if(req.isAuthenticated())
    {
        res.render('user/change-pw',{username: req.user,isLogin: req.isAuthenticated()});
    }
    else
    {
        res.redirect('/');
    }  
}

module.exports.submitChangePassword =async (req,res,next)=>{
    logInService.submitChangePassword(req,res,next);
}

module.exports.getOrders =async (req,res,next)=>{
    logInService.getOrders(req,res,next);
    if(req.isAuthenticated())
    {
        const user = req.user;
        const result = await logInService.getOrders(user);
        res.render('user/order-history',{danhsach: result, username: user , isLogin: true});
    }
    else
    {
        res.redirect('/logup');
    }  
}
