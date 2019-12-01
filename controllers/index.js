const index = require('../models/indexService')
module.exports.index = function(req, res, next) {
    index.getIndex(req,res,next);
}