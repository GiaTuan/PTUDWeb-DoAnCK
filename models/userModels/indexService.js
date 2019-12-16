var pool = require('../../connection.js');
module.exports.getIndex = function(req, res, next) {
  ;(async () => {
    const client = await pool.connect();
    try {
        const result1 = await client.query('SELECT * FROM "RecommendBooks"');
        const result2 = await client.query('SELECT * FROM "FavoriteBooks"');
        res.render('user/index',{danhsach: result1,danhsach2: result2, username: req.user, isLogin: req.isAuthenticated()}); 
    } finally {
      client.release()
    }
  })().catch(err => next(err))
}