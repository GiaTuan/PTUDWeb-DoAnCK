var logUp = require('../models/logUpService')

module.exports.logUp = function(req,res,next){
    logUp.getLogUp(req,res,next);
}

module.exports.logUpComplete = function(req,res,next)
{
    logUp.getLogUpComplete(req,res,next);
}
