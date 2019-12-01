var pool = require('../connection.js');
module.exports.getIndex = function(req, res, next) {
    pool.connect(function(err, client, done){
      
      if(err) {
          return console.log(err);
      }
      client.query('SELECT * FROM "RecommendBooks"', function (err, result1) {
          client.query('SELECT * FROM "FavoriteBooks"', function (err, result2) {
            done();
            if(req.isAuthenticated())
            {
              console.log(req);
              res.render('index',{layout: 'layout2',danhsach: result1,danhsach2: result2, username: req.user});
            }
            else
            {
              res.render('index',{danhsach: result1,danhsach2: result2});
            }
          });
      });
    });
}