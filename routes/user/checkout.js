var express = require('express')
var router = express.Router()
const checkOutController = require('../../controllers/userControllers/checkout');

router.get('/cart',function(req,res,next){
    res.render('user/cart',{username: req.user,isLogin: req.isAuthenticated()});
})


router.get('/order',checkOutController.getOrder);

router.post('/order',checkOutController.postOrder)

module.exports = router;