var pool = require('../../connection.js');
module.exports.getLanguage = function(req, res, next) {
  
    //res.render('index', { title: 'Express' });
    pool.connect(function(err, client, done){
      // Handle connection errors
      if(err) {
          return console.log(err);
      }

      client.query('SELECT * FROM "Books"  WHERE "BookLanguage"=' + '\'' + req.params.id +'\'' , function (err, result) {
          done();
          if(err){
              return console.log('error running query', err);
          }
          if(req.isAuthenticated())
          {
            res.render('user/shop',{layout: 'layout2',danhsach: result , username: req.user});
          }
          else
          {
            res.render('user/shop',{danhsach: result});
          }
      });
  });
  }