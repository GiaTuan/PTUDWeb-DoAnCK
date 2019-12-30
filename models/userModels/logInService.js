const nodemailer = require('nodemailer');
const bcrypt = require('bcryptjs');
const pool=require('../../connection.js');

module.exports.getUserFromEmail = async (email) =>{
    const client = await pool.connect();
    try {
        const result = await client.query('SELECT * FROM "Users"  WHERE "email"='+ '\'' + email +'\'');
        await client.release();
        return result;
    }
    catch(err)
    {
        console.log(err);
    }
}

module.exports.getStateOfUser =  (account) =>{
    return new Promise((resolve,reject)=>{
        ;(async () => {
            const client = await pool.connect();
            try {
                const result = await client.query('SELECT * FROM "Users"  WHERE "account"='+ '\'' + account +'\'');
                resolve(result.rows[0].state); 
            } finally {
            client.release()
            }
        })().catch(err => console.log(err)); 
    });
}

module.exports.sendToEmail = async (email)=>{
    const client = await pool.connect();
    let tempPass =  "PTUDWK17_" + Math.floor(100000 + Math.random() * 900000)
    bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash(tempPass, salt, function(err, hash) {
            client.query('UPDATE "Users" SET "password"='+' \''+ hash + '\''  + 'WHERE "email"='+ '\'' + email +'\'',function(err,result2){
                if(err)
                {
                    return console.log(err);
                }
                else
                {
                    client.release();
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
    }
    });
    return 1;
}


module.exports.getUserInfo =  async (user) => {
        const client = await pool.connect();
        try 
        {
            const result = await client.query('SELECT * FROM "Users"  WHERE "account"='+ '\'' + user +'\'');
            await client.release();
            return result; 
        } 
        catch(err)
        {
            console.log(err);
        }
}

module.exports.updateInfo =async (user,name,email,phone,addr) => {
    const client = await pool.connect();
    try {
        const nguoidung = await client.query('SELECT * FROM "Users" WHERE "account"='+ '\'' + user +'\'');
        let check = 1;
        if(email !== nguoidung.rows[0].email)
        {
            const checkEmail = await client.query('SELECT * FROM "Users"  WHERE "email"='+ '\'' + email +'\'');
            if(checkEmail.rows.length > 0)
            {
                check = -1;
            }
        }
        if(check === -1)
        {
            const result = await client.query('SELECT * FROM "Users"  WHERE "account"='+ '\'' + user +'\'');
            client.release();
            return [-1,result];
        }
        else
        {
            await client.query("UPDATE \"Users\" SET \"name\" ='" + name + '\',"email"=\''+ email + '\',"address"=\''+ addr + '\',"phone"=\''+ phone + '\' WHERE "account"=' + '\'' + user +'\'');      
            const result = await client.query('SELECT * FROM "Users"  WHERE "account"='+ '\'' + user +'\'');
            client.release();
            return [1,result];
        }
        
    } 
    catch(err)
    {
        console.log(err);
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

module.exports.getOrders = async (user)=>{
    const client = await pool.connect();
    try {
        const result = await client.query('SELECT * FROM "Order"  WHERE "username"='+ '\'' + user +'\'');
        await client.release();
        return result;
    }
    catch(err)
    {
        console.log(err);
    }
}