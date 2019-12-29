const index = require('../../models/userModels/indexService')
module.exports.index =async (req, res, next) => {
    const result = await index.getIndex();
    res.render('user/index',{danhsach: result[0],danhsach2: result[1], username: req.user, isLogin: req.isAuthenticated()}); 
}