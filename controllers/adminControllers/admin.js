const passport = require('passport');
const adminService = require('../../models/adminModels/adminService');

module.exports.getAdmin = async (req,res,next)=>{
    const user = req.user;
    const isAdmin = await adminService.getAdmin(user);
    if(req.isAuthenticated() && isAdmin == true)
    {
        res.render('partials/nav',{layout: 'ad-layout',adname: user,isAdmin: true});
    }
    else
    {
        res.render('admin/index',{layout: 'ad-layout' });
    }    
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

module.exports.getSignUp = async(req,res,next) =>{
    const user = req.user;
    const isAdmin = await adminService.getAdmin(user);
    if(req.isAuthenticated() && isAdmin == true)
    {
        let announce = req.query.announce;
        if(announce === 'existed')
        {
            announce= 'Tài khoản đã tồn tại';
            res.render('admin/signup',{layout: 'ad-layout',adname: user,announce,isAdmin: true})
        }
        if(announce === 'success')
        {
            res.render('admin/signup-success',{layout: 'ad-layout' ,adname: user,isAdmin: true});
        }
        if(announce === 'email-existed')
        {
            announce = "Email đã tồn tại";
            res.render('admin/signup',{layout: 'ad-layout',adname: user,announce,isAdmin: true})
        } 
        else
        {
            res.render('admin/signup',{layout: 'ad-layout',adname: user,isAdmin: true})
        }        
    }
    else
    {
        res.redirect('/admin')
    }     
}

module.exports.postSignUp =function(req,res,next){
    adminService.postSignUp(req,res,next);
}


module.exports.getAdInfo = async (req,res,next) =>{
    const user = req.user;
    console.log(req.user);
    const isAdmin = await adminService.getAdmin(user);
    if(req.isAuthenticated() && isAdmin == true)
    {
        const result = await adminService.getAdInfo(user);
        res.render('admin/info',{layout: 'ad-layout', adname: req.user, admin: result,isAdmin: true });
    }
    else
    {
        res.redirect('/admin');
    }         
}


module.exports.updateAdInfo = async (req,res,next)=>{
    const name = req.body.name;
    const email =req.body.email;
    const phone = req.body.phone;
    const addr= req.body.addr;
    const user = req.user;
    const result = await adminService.updateAdInfo(name,email,phone,addr,user);
    if(result[0]=== -1)
    {
        res.render('admin/info',{admin: result[1],announce: 'Email đã tồn tại',layout: 'ad-layout', adname: user, isAdmin: true });       

    }
    else
    {
        res.render('admin/info',{admin: result[1],announce: 'Cập nhật thông tin tài khoản thành công',layout: 'ad-layout', adname: user, isAdmin: true });
    }

}

module.exports.logOut = function(req,res,next){
    req.logout();
    res.redirect('/admin');
}

module.exports.manageUser = async (req,res,next)=>{
    const user = req.user;
    const isAdmin =await adminService.getAdmin(user);
    if(req.isAuthenticated() && isAdmin == true)
    {
        const numbersOfUsersPerPage = 5;
        const page = req.query.page;
        const result = await adminService.getUsers(page,numbersOfUsersPerPage);

        res.render('admin/user-manage',{layout: 'ad-layout',user: result[0], numbersOfPages: result[1] , adname: req.user,isAdmin: true });
    }
    else
    {
        res.redirect('/admin');
    }  
}


module.exports.getUserDetail = async (req,res,next)=>{
    const user = req.user;
    const isAdmin = await adminService.getAdmin(user);
    if(req.isAuthenticated() && isAdmin == true)
    {
        const id = req.params.id;
        const result = await adminService.getUserDetail(id);
        res.render('admin/user-detail',{layout: 'ad-layout',danhsach: result[0],isActive: result[1],adname: req.user,isAdmin: true});
        }
    else
    {
        res.redirect('/admin');
    }       
}

module.exports.activateUser = async (req,res,next) =>{
    const id = req.params.id;
    const activation = req.body.activation;
    const result = await adminService.activateUser(id,activation);
    res.render('admin/user-detail',{layout: 'ad-layout',danhsach: result[0],announce: "Thay đổi trạng thái thành công",adname: req.user,isAdmin: true,isActive: result[1]})
}

module.exports.getOrders = async (req,res,next) =>{
    const user = req.user;
    const isAdmin = await adminService.getAdmin(user);
    if(req.isAuthenticated() && isAdmin == true)
    {
        const result = await adminService.getOrders();
        res.render('admin/order-info',{layout: 'ad-layout',adname: req.user,isAdmin: true,danhsach: result});
    }
    else
    {
        res.redirect('/admin');
    }         
}

module.exports.getOrderDetail =async (req,res,next)=>{
    const user = req.user;
    const isAdmin = await adminService.getAdmin(user);
    if(req.isAuthenticated() && isAdmin == true)
    {
        const id = req.params.id;
        const result = await adminService.getOrderDetail(id);
        res.render('admin/order-detail',{layout: 'ad-layout',danhsach: result, adname: req.user,isAdmin: true});
    }
    else
    {
        res.redirect('/admin');
    }     
}

module.exports.changeOrderState =async (req,res,next)=>{
    const state = req.body.state;
    const id = req.params.id;
    const result = await adminService.changeOrderState(state,id);
    res.render('admin/order-detail',{layout: 'ad-layout',danhsach: result, adname: req.user,isAdmin: true});

}

module.exports.manageShop =async (req,res,next)=>{
    const user = req.user;
    const isAdmin = await adminService.getAdmin(user);

    if(req.isAuthenticated() && isAdmin == true)
    {
        let page = req.query.page;
        const numbersOfBooksPerPage = 5;
        const publisher = req.query.publisher;
        const type = req.query.type;
        const lang = req.query.lang;
        const result = await adminService.manageShop(page,publisher,type,lang,numbersOfBooksPerPage);

        res.render('admin/manage-shop',{layout: 'ad-layout',danhsach: result[0],numbersOfPages: result[1],adname: req.user,isAdmin: true});
    }
    else
    {
        res.redirect('/admin');
    }   
}

module.exports.getBookDetail = async(req,res,next) =>{
    const user = req.user;
    const isAdmin = await adminService.getAdmin(user);

    if(req.isAuthenticated() && isAdmin == true)
    {
        const id = req.params.id;
        const result = await adminService.getBookByID(id);
        res.render('admin/book-detail',{layout: 'ad-layout',danhsach: result,adname: req.user,isAdmin: true});
    }
    else
    {
        res.redirect('/admin');
    }  
}
module.exports.changeBookDetail = async(req,res,next)=>{
    const name = req.body.name;
    const type = req.body.type;
    const description = req.body.description;
    const id = req.params.id;
    const lang = req.body.lang;
    const price = req.body.price;
    const author = req.body.author;
    const nxb = req.body.publisher;
    const isDelete = req.body.delete;
    let result;
    let announce;
    let deletebook = false;
    if(isDelete !== undefined)
    {
        deletebook = true;
        result = await adminService.deleteBookDetail(id);
        announce = 'Xóa sách thành công';
    }
    else
    {
       result = await adminService.changeBookDetail(name,type,description,id,lang,price,author,nxb);
       announce = 'Thay đổi thông tin thành công';
    }
    res.render('admin/book-detail',{layout: 'ad-layout',danhsach: result,announce: announce,deletebook:deletebook,adname: req.user,isAdmin: true});


}

module.exports.addBook = async(req,res,next) =>{
    const user = req.user;
    const isAdmin = await adminService.getAdmin(user);

    if(req.isAuthenticated() && isAdmin == true)
    {
        res.render('admin/add-book',{layout: 'ad-layout',adname: user,isAdmin: true});
    }
    else
    {
        res.redirect('/admin');
    }   
}

module.exports.submitBook = (req,res,next) =>{
    adminService.addBook(req,res,next);
}


module.exports.getTop10 = async(req,res,next)=>{
    const user = req.user;
    const isAdmin = await adminService.getAdmin(user);

    if(req.isAuthenticated() && isAdmin == true)
    {
        const result = await adminService.getTop10();
        console.log(result);
        res.render('admin/top10',{layout: 'ad-layout',danhsach: result,adname: user,isAdmin: true});
    }
    else
    {
        res.redirect('/admin');
    }  
}

module.exports.getTurnover = async(req,res,next)=>{
    const user = req.user;
    const isAdmin = await adminService.getAdmin(user);

    if(req.isAuthenticated() && isAdmin == true)
    {
        const date = req.query.date;
        const result = await adminService.getTurnover(date);
        res.render('admin/turnover',{layout: 'ad-layout',danhsach: result,adname: req.user,isAdmin: true});
    }
    else
    {
        res.redirect('/admin');
    }
}