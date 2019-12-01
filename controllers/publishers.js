const publishers = require('../models/publisherService');
module.exports.publishers = function(req, res, next) {
  publishers.getPublisher(req,res,next);
}
