var express = require('express')
var router = express.Router()
const controller = require('../../controllers/userControllers/index')
router.get('/', function(req,res){
    req.logout();
    res.redirect('/');
});

module.exports = router;