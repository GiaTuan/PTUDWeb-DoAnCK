var express = require('express')
var router = express.Router()

router.get('/cart',function(req,res,next){
    res.render('user/cart');
})
router.post('/cart',function(req,res,next){
    
})

module.exports = router;