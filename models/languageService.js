var pool = require('../connection.js');
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
          res.render('shop',{danhsach: result});
      });
  });
  }