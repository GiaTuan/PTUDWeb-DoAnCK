var express = require('express')
var router = express.Router()
const logInControllers = require('../../controllers/userControllers/login')

router.get('/info',logInControllers.getUserInfo)

router.get('/change-pw',logInControllers.changePassword)

router.post('/change-pw',logInControllers.submitChangePassword)

module.exports = router;
