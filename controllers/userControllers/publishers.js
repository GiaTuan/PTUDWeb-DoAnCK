const publisherService = require('../../models/userModels/publisherService');
module.exports.publishers = async (req, res, next) => {
  let publisher = req.params.id;
  const search = req.query.search;
  const page = req.query.page;
  const sort = req.query.sort;
  const numbersOfBooksPerPage = 6;
  const result = await publisherService.getPublisher(publisher,search,page,sort,numbersOfBooksPerPage);
  res.render('user/shop',{danhsach: result[0] , username: req.user,numbersOfPages: result[1],isLogin: req.isAuthenticated()});

}
