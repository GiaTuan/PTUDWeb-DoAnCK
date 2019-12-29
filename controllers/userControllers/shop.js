const shop = require('../../models/userModels/shopService');
module.exports.shop = async (req, res, next) => {
    const search = req.query.search;
    const page = req.query.page;
    const sort = req.query.sort;
    const numbersOfBooksPerPage = 6;
  
    const result = await shop.getShop(search,page,sort,numbersOfBooksPerPage);
    res.render('user/shop',{danhsach: result[0], username: req.user ,search: search, numbersOfPages: result[1] ,isLogin: req.isAuthenticated()});
}

module.exports.getFind = async (req,res,next)=>{
  const search = req.query.search;
  const gia = req.query.gia;
  const theloai = req.query.theloai;
  const lang = req.query.lang;
  const page = req.query.page;
  const sort = req.query.sort;
  const numbersOfBooksPerPage = 6;

  const result = await shop.getFind(search,gia,theloai,lang,page,sort,numbersOfBooksPerPage);
  res.render('user/shop',{danhsach: result[0] , username: req.user ,search: search, numbersOfPages: result[1] ,isLogin: req.isAuthenticated()});

}