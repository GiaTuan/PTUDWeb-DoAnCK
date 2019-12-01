const pool = require('../connection');
module.exports.getType= function(req, res, next) {
    pool.connect(function(err, client, done){
      // Handle connection errors
      if(err) {
          return console.log(err);
      }
      let type = req.params.id
      if(type === 'TieuThuyet')
      {
        type = 'Tiểu thuyết';
      }
      if(type === 'TuTruyen')
      {
        type = 'Tự truyện';
      }
      if(type === 'VanHoc')
      {
        type = 'Văn học';
      }
      
      client.query('SELECT * FROM "Books"  WHERE "Type"=' + '\'' + type +'\'' , function (err, result) {
          done();
          if(err){
              return console.log('error running query', err);
          }
          if(req.isAuthenticated())
          {
            res.render('shop',{layout: 'layout2',danhsach: result , username: req.user});
          }
          else
          {
            res.render('shop',{danhsach: result});
          }
      });
  });
  }