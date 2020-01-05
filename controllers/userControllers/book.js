const book = require('../../models/userModels/bookService')
module.exports.book = async (req, res, next) => {
    const id = req.params.id;
    const page = req.query.page;

    const result = await book.getByID(id,page);

    res.render('user/product',{danhsach: result[0], username: req.user,binhluan: result[1], numberOfPages: result[2], isLogin: req.isAuthenticated(),danhsach2: result[3]});

}

module.exports.AddComment = async (req,res,next) => {
    const BookID = req.params.id ;
    const user = req.body.usercomment;
    const comment = req.body.comment;
    await book.AddComment(BookID,user,comment);
    res.redirect(req.get('referer'));      

}