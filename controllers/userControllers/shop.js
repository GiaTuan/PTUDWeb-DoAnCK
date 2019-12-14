const shop = require('../../models/userModels/shopService');
module.exports.shop = function(req, res, next) {
  shop.getShop(req,res,next);
}

module.exports.getFind = function(req,res,next){
  shop.getFind(req,res,next);
}