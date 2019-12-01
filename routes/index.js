var express = require('express');
var router = express.Router();
var pool = require('../connection.js');
const controller = require('../controllers/index')
router.get('/', controller.index);

module.exports = router;
