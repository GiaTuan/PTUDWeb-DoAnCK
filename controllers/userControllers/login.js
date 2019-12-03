const logInModel = require('../../models/userModels/logInService')
module.exports.logIn = function(req,res,next){
    logInModel.getLogIn(req,res,next);
}

module.exports.submitLogIn = function(req,res,next){
    logInModel.submitLogIn(req,res,next);
}

module.exports.getUserInfo = function(req,res,next){
    logInModel.getUserInfo(req,res,next);
}

