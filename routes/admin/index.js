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

router.post('/info',adminControllers.updateAdInfo);

router.get('/logout',adminControllers.logOut);

router.get('/user-manage',adminControllers.manageUser);

router.get('/user-manage/id=:id',adminControllers.getUserDetail)

router.post('/user-manage/id=:id',adminControllers.activateUser)

router.get('/orders',adminControllers.getOrders)

router.get('/orders/id=:id',adminControllers.getOrderDetail)

router.post('/orders/id=:id',adminControllers.changeOrderState)

router.get('/manage-shop',adminControllers.manageShop)

router.get('/manage-shop/id=:id',adminControllers.getBookDetail)

router.post('/manage-shop/id=:id',adminControllers.changeBookDetail)


router.get('/manage-shop/add-book',adminControllers.addBook)

router.post('/manage-shop/add-book',adminControllers.submitBook)

router.get('/statistic',adminControllers.getTop10)

router.get('/turnover',adminControllers.getTurnover)


module.exports = router;
