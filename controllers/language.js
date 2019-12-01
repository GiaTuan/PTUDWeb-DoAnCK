const language= require('../models/languageService');
module.exports.language = function(req, res, next) {
  language.getLanguage(req,res,next);
}
