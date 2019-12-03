var express = require('express')
var bodyParser = require('body-parser')
const adminControllers = require('../../controllers/adminControllers/admin')
var urlencodedParser = bodyParser.urlencoded({ extended: false })
var router = express.Router()


router.get('/',adminControllers.getAdmin);

router.post('/',adminControllers.signIn);

router.get('/signup',adminControllers.getSignUp);

router.post('/signup',urlencodedParser,adminControllers.postSignUp);

router.get('/info',adminControllers.getAdInfo);

router.get('/logout',adminControllers.logOut);

router.get('/user-manage',adminControllers.manageUser);
module.exports = router;
