const publishers = require('../../models/userModels/publisherService');
module.exports.publishers = function(req, res, next) {
  publishers.getPublisher(req,res,next);
}
