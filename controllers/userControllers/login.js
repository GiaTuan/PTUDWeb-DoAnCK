const logInModel = require('../../models/userModels/logInService')
module.exports.logIn = (req,res,next)=>{
    logInModel.getLogIn(req,res,next);
}

module.exports.submitLogIn = (req,res,next)=>{
    logInModel.submitLogIn(req,res,next);
}

module.exports.getUserInfo = (req,res,next)=>{
    logInModel.getUserInfo(req,res,next);
}

module.exports.updateInfo = (req,res,next)=>{
    logInModel.updateInfo(req,res,next);
}

module.exports.changePassword = (req,res,next)=>{
    logInModel.changePassword(req,res,next);
}

module.exports.submitChangePassword = (req,res,next)=>{
    logInModel.submitChangePassword(req,res,next);
}

module.exports.getOrders = (req,res,next)=>{
    logInModel.getOrders(req,res,next);
    
}
