var express = require('express');
var router = express.Router();
var pool = require('../../connection.js');
const controller = require('../../controllers/userControllers/shop')
const book_controller = require('../../controllers/userControllers/book');
const publisher_controller = require('../../controllers/userControllers/publishers')
const language_controller = require('../../controllers/userControllers/language')
const type_controller = require('../../controllers/userControllers/type');

router.get('/',controller.shop);
router.get('/product/id=:id',book_controller.book);
router.get('/publisher=:id',publisher_controller.publishers);
router.get('/lang=:id',language_controller.language);
router.get('/type=:id',type_controller.type);
router.get('/find',controller.getFind);

module.exports = router;
