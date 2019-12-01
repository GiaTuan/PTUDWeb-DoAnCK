const shop = require('../models/shopService');
module.exports.shop = function(req, res, next) {
  shop.getShop(req,res,next);
}