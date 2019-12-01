var signUp = require('../models/signUpService')

module.exports.signUp = function(req,res,next){
    signUp.getSignUp(req,res,next);
}

module.exports.signUpComplete = function(req,res,next)
{
    signUp.getSignUpComplete(req,res,next);
}
