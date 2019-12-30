const typeService = require('../../models/userModels/typeService');
module.exports.type = async (req, res, next) => {
    const type = req.params.id
    const search = req.query.search;
    const page = req.query.page;
    const sort = req.query.sort;
    const numbersOfBooksPerPage = 6;
        
    const result = await typeService.getType(type,search,page,sort,numbersOfBooksPerPage);

    res.render('user/shop',{danhsach: result[0] , username: req.user,numbersOfPages: result[1],isLogin: req.isAuthenticated()});


}