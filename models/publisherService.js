var pool = require('../connection.js');

module.exports.getPublisher = function(req, res, next) {
  
    //res.render('index', { title: 'Express' });
    pool.connect(function(err, client, done){
      // Handle connection errors
      if(err) {
          return console.log(err);
      }
      // SQL Query > Insert Data
      let publisher = req.params.id;
      if(publisher === 'NXB-HNV')
      {
        publisher = 'Nhà Xuất Bản Hội Nhà Văn';
      }
      if(publisher === 'NXB-LaoDong')
      {
        publisher = 'Nhà Xuất Bản Lao Động';
      }
      if(publisher === 'NXB-TH')
      {
        publisher = 'Nhà Xuất Bản Tổng hợp TP.HCM';
      }
      if(publisher === 'NXB-TheGioi')
      {
        publisher = 'Nhà Xuất Bản Thế Giới';
      }
      if(publisher === 'NXB-Tre')
      {
        publisher = 'Nhà Xuất Bản Trẻ';
      }
      if(publisher === 'NXB-TriThuc')
      {
        publisher = 'Nhà Xuất Bản Tri Thức';
      }
      if(publisher === 'NXB-NhaNam')
      {
        publisher = 'Nhã Nam';
      }
      console.log('SELECT * FROM "Books"  WHERE "Publisher"=' + '\'' + publisher +'\'');
      client.query('SELECT * FROM "Books"  WHERE "Publisher"=' + '\'' + publisher +'\'' , function (err, result) {
          done();
          if(err){
              return console.log('error running query', err);
          }
          res.render('shop',{danhsach: result});
      });
  });
  }