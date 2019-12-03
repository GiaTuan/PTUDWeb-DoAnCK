const book = require('../../models/userModels/bookService')
module.exports.book = function(req, res, next) {
    const id = req.params.id
    book.getByID(id,req,res,next);
}