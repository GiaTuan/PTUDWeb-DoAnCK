var logUp = require('../../models/userModels/logUpService')

module.exports.logUp = function(req,res,next){
    res.render('user/logup');
}

module.exports.logUpComplete = function(req,res,next)
{
    logUp.getLogUpComplete(req,res,next);
}
