var express = require('express');
var router = express.Router();
var pool = require('../connection.js');
const controller = require('../controllers/shop')
const book_controller = require('../controllers/book');
const publisher_controller = require('../controllers/publishers')
const language_controller = require('../controllers/language')
const type_controller = require('../controllers/type');

router.get('/',controller.shop);
router.get('/product/id=:id',book_controller.book);
router.get('/publisher=:id',publisher_controller.publishers);
router.get('/lang=:id',language_controller.language);
router.get('/type=:id',type_controller.type);

module.exports = router;
