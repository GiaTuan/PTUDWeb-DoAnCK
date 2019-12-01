var express = require('express')
var bodyParser = require('body-parser')
var pool = require('../connection')
var signUpController = require('../controllers/sign-up')
var router = express.Router();
var urlencodedParser = bodyParser.urlencoded({ extended: false })
router.get('/', signUpController.signUp)

router.post('/',urlencodedParser,signUpController.signUpComplete)
module.exports = router;
