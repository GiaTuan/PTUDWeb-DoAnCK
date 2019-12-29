const pool = require('../../connection')
const passport = require('passport');
const bcrypt = require('bcryptjs');


module.exports.getAdmin = (req,res,next)=>{
    ;(async () => {
        const client = await pool.connect();
        try {
            const result = await client.query('SELECT adname FROM "Admin" ');
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
                res.render('partials/nav',{layout: 'ad-layout',adname: req.user,isAdmin: true});
            }
            else
            {
                res.render('admin/index',{layout: 'ad-layout' });
            }         
        } finally {
          client.release()
        }
      })().catch(err => next(err))
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
   
    ;(async () => {
        const client = await pool.connect();
        try {
            const result = await client.query('SELECT adname FROM "Admin" ');
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
                let announce = req.query.announce;
                if(announce === 'existed')
                {
                    announce= 'Tài khoản đã tồn tại';
                    res.render('admin/signup',{layout: 'ad-layout',adname: req.user,announce,isAdmin: true})
                }
                if(announce=== 'success')
                {
                    res.render('admin/signup-success',{layout: 'ad-layout' ,adname: req.user,isAdmin: true});
                }
                else
                {
                    res.render('admin/signup',{layout: 'ad-layout',adname: req.user,isAdmin: true})
                }            }
            else
            {
                res.redirect('/admin')
            }         
        } finally {
          client.release()
        }
      })().catch(err => next(err))
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
    
    ;(async () => {
        const client = await pool.connect();
        try {
            const result = await client.query('SELECT adname FROM "Admin" ');
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
                const result = await client.query('SELECT * FROM "Admin"  WHERE "adname"='+ '\'' + req.user +'\'');
                res.render('admin/info',{layout: 'ad-layout', adname: req.user, admin: result,isAdmin: true });
            }
            else
            {
                res.redirect('/admin');
            }         
        } finally {
          client.release()
        }
    })().catch(err => next(err))
}

module.exports.updateAdInfo = (req,res,next)=>{
    ;(async () => {
        const client = await pool.connect();
        try {
            const name = req.body.name;
            const email =req.body.email;
            const phone = req.body.phone;
            const addr= req.body.addr;
            const checkEmail = await client.query('SELECT * FROM "Admin"  WHERE "email"='+ '\'' + email +'\'');
            if(checkEmail.rows.length > 0)
            {
                const result = await client.query('SELECT * FROM "Admin"  WHERE "adname"='+ '\'' + req.user +'\'');
                res.render('admin/info',{admin: result,announce: 'Email đã tồn tại',layout: 'ad-layout', adname: req.user, isAdmin: true });       
            }
            else
            {
                await client.query("UPDATE \"Admin\" SET \"name\" ='" + name + '\',"email"=\''+ email + '\',"address"=\''+ addr + '\',"phone"=\''+ phone + '\' WHERE "adname"=' + '\'' + req.user +'\'');      
                const result = await client.query('SELECT * FROM "Admin"  WHERE "adname"='+ '\'' + req.user +'\'');
                res.render('admin/info',{admin: result,announce: 'Cập nhật thông tin tài khoản thành công',layout: 'ad-layout', adname: req.user, isAdmin: true });
            }
            
        } finally {
          client.release()
        }
    })().catch(err => next(err))
}


module.exports.logOut = function(req,res,next){
    req.logout();
    res.redirect('/admin');
}

module.exports.getUsers = function(req,res,next){

    ;(async () => {
        const client = await pool.connect();
        try {
            const result = await client.query('SELECT adname FROM "Admin" ');
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
                const result = await client.query('SELECT * FROM "Users" ');
                const page = req.query.page;
                const numbersOfUsersPerPage = 5;
                const numbersOfUsers = result.rows.length;
                const numbersOfPages = parseInt(numbersOfUsers/numbersOfUsersPerPage)+(numbersOfUsers%numbersOfUsersPerPage === 0 ? 0 : 1);
                const result2 = await client.query('SELECT * FROM "Users"'+'LIMIT ' +numbersOfUsersPerPage.toString() + ' OFFSET ' + ((page-1)*numbersOfUsersPerPage).toString());
    
                res.render('admin/user-manage',{layout: 'ad-layout',user: result2, numbersOfPages , adname: req.user,isAdmin: true });
            }
            else
            {
                res.redirect('/admin');
            }         
        } finally {
          client.release()
        }
      })().catch(err => next(err))
}

module.exports.getUserDetail = (req,res,next) =>{
    ;(async () => {
        const client = await pool.connect();
        try {
            const result = await client.query('SELECT adname FROM "Admin" ');
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
                const result = await client.query('SELECT * FROM "Users" WHERE "account" = \'' + req.params.id + "'");
                let isActive
                if(result.rows[0].state === "hoạt động")
                {
                    isActive = true;
                }
                res.render('admin/user-detail',{layout: 'ad-layout',danhsach: result,isActive,adname: req.user,isAdmin: true});
             }
            else
            {
                res.redirect('/admin');
            }         
        } finally {
          client.release()
        }
      })().catch(err => next(err))
}


module.exports.activateUser = (req,res,next) =>
{
    ;(async () => {
        const client = await pool.connect();
        try {
            if(req.body.activation === "Khóa tài khoản")
            {
                await client.query('UPDATE  "Users" SET "state"=\'khóa\' WHERE "account" = \'' + req.params.id + "'");
            }
            else
            {
                await client.query('UPDATE  "Users" SET "state"=\'hoạt động\' WHERE "account" = \'' + req.params.id + "'");
            }
            const result = await client.query('SELECT * FROM "Users" WHERE "account" = \'' + req.params.id + "'");
            let isActive
            if(result.rows[0].state === "hoạt động")
            {
                isActive = true;
            }
            res.render('admin/user-detail',{layout: 'ad-layout',danhsach: result,announce: "Thay đổi trạng thái thành công",adname: req.user,isAdmin: true,isActive})
        } finally {
          client.release()
        }
      })().catch(err => next(err))
    
}

module.exports.getOrders= (req,res,next)=>{

    ;(async () => {
        const client = await pool.connect();
        try {
            const result = await client.query('SELECT adname FROM "Admin" ');
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
                const result = await client.query('SELECT * FROM "Order" where "id" != 1 ');
                res.render('admin/order-info',{layout: 'ad-layout',adname: req.user,isAdmin: true,danhsach: result});
            }
            else
            {
                res.redirect('/admin');
            }         
        } finally {
          client.release()
        }
      })().catch(err => next(err))
}

module.exports.getOrderDetail = (req,res,next) =>{
    ;(async () => {
        const client = await pool.connect();
        try {
            const result = await client.query('SELECT adname FROM "Admin" ');
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
                const result = await client.query('SELECT * FROM "Order" WHERE "id" = \'' + req.params.id + "'");
                res.render('admin/order-detail',{layout: 'ad-layout',danhsach: result, adname: req.user,isAdmin: true});
            }
            else
            {
                res.redirect('/admin');
            }         
        } finally {
          client.release()
        }
      })().catch(err => next(err))
}

module.exports.changeOrderState = (req,res,next) =>{
    ;(async () => {
        const client = await pool.connect();
        try {
            console.log(req.query.state);
            console.log('UPDATE "Order" SET "state"='+'\''+ req.body.state +'\''+' WHERE "id" = '+ req.params.id);
            await client.query('UPDATE  "Order" SET "state"='+'\''+ req.body.state +'\''+' WHERE "id" ='+ req.params.id);
            const result = await client.query('SELECT * FROM "Order" WHERE "id" = ' + req.params.id);
            res.render('admin/order-detail',{layout: 'ad-layout',danhsach: result, adname: req.user,isAdmin: true});
        } finally {
          client.release()
        }
    })().catch(err => next(err))
}

module.exports.manageShop = (req,res,next)=>{

    ;(async () => {
        const client = await pool.connect();
        try {
            const result = await client.query('SELECT adname FROM "Admin" ');
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
                const result = await client.query('SELECT * FROM "Books" ');

                let page = req.query.page;
                if(page== undefined)
                {
                    page=1;
                }
                const numbersOfBooksPerPage = 5;
                const numbersOfBooks = result.rows.length;
                const numbersOfPages = parseInt(numbersOfBooks/numbersOfBooksPerPage)+(numbersOfBooks%numbersOfBooksPerPage === 0 ? 0 : 1);
                const result2 = await client.query('SELECT * FROM "Books"'+'LIMIT ' +numbersOfBooksPerPage.toString() + ' OFFSET ' + ((page-1)*numbersOfBooksPerPage).toString());
                res.render('admin/manage-shop',{layout: 'ad-layout',danhsach: result2,numbersOfPages,adname: req.user,isAdmin: true});
            }
            else
            {
                res.redirect('/admin');
            }         
        } finally {
          client.release()
        }
      })().catch(err => next(err))
}