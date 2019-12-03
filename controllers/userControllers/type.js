const type = require('../../models/userModels/typeService');
module.exports.type = function(req, res, next) {
  type.getType(req,res,next);

}