var express = require('express')
var bodyParser = require('body-parser')
var logUpController = require('../../controllers/userControllers/logup')
var router = express.Router();
var urlencodedParser = bodyParser.urlencoded({ extended: false })
router.get('/', logUpController.logUp)

router.post('/',urlencodedParser,logUpController.logUpComplete)
module.exports = router;
