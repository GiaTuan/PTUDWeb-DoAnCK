var express = require('express')
var router = express.Router()
const logInControllers = require('../controllers/login')

router.get('/',logInControllers.getUserInfo)

module.exports = router;
