var pool = require('../../connection.js');
const checkoutService = require('../../models/userModels/checkoutService');
module.exports.getOrder = async(req, res, next) => {
    if(req.isAuthenticated())
    {
        const user = req.user;
        const result = await checkoutService.getOrder(user)
        res.render('user/checkout',{user: result,username: req.user,isLogin: req.isAuthenticated()});
    }
    else
    {
        res.redirect('/login');
    }  
}
var book = [];
var post = 0;
module.exports.postOrder = async (req,res,next)=>{
    post ++;
    if(post===1)
    {
        const numberOfBooks = req.body.length;
        for(let i= 0 ; i < numberOfBooks ; i++)
        {
            book.push(req.body[i]);
        }
    }
    if(post===2)
    {
        const user = req.user;
        const tenkhachhang =req.body.name;
        const diachi = req.body.addr;
        const sdt = req.body.phone;
        const payment = req.body.payment;
        await checkoutService.postOrder(user,tenkhachhang,diachi,sdt,payment,book);
        book = [];
        post = 0;
        res.render('user/checkout-done',{username: req.user,isLogin: req.isAuthenticated()});

    }
}
