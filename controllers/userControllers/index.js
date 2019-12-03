const index = require('../../models/userModels/indexService')
module.exports.index = function(req, res, next) {
    index.getIndex(req,res,next);
}