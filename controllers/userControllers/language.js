const language= require('../../models/userModels/languageService');
module.exports.language = function(req, res, next) {
  language.getLanguage(req,res,next);
}
