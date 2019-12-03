var express = require('express')
var router = express.Router()
const logInControllers = require('../../controllers/userControllers/login')

router.get('/', logInControllers.logIn)

router.post('/',logInControllers.submitLogIn)

module.exports = router;
