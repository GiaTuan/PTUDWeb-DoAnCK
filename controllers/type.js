const type = require('../models/typeService');
module.exports.type = function(req, res, next) {
  type.getType(req,res,next);

}