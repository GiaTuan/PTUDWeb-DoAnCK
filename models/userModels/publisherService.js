var pool = require('../../connection.js');

module.exports.getPublisher = function(req, res, next) {
  
    pool.connect(function(err, client, done){

      if(err) {
          return console.log(err);
      }
     
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
      
      client.query('SELECT * FROM "Books"  WHERE "Publisher"=' + '\'' + publisher +'\'' , function (err, result) {
          const page = req.query.page;
          const sort = req.query.sort;
          const numbersOfBooksPerPage = 6;

          const numbersOfBooks = result.rows.length;
          const numbersOfPages = parseInt(numbersOfBooks/numbersOfBooksPerPage)+(numbersOfBooks%numbersOfBooksPerPage === 0 ? 0 : 1);
          
          let queryString;
          if(sort === undefined)
          {
              queryString= 'SELECT * FROM "Books"  WHERE "Publisher"=' + '\'' + publisher +'\'' +' LIMIT ' +numbersOfBooksPerPage.toString() + ' OFFSET ' + ((page-1)*numbersOfBooksPerPage).toString();
          }
          else if(sort === 'asc')
          {
            queryString= 'SELECT * FROM "Books"  WHERE "Publisher"=' + '\'' + publisher +'\'' +'ORDER BY "Price" ASC LIMIT ' +numbersOfBooksPerPage.toString() + ' OFFSET ' + ((page-1)*numbersOfBooksPerPage).toString();
          }
          else if(sort === 'desc')
          {
            queryString= 'SELECT * FROM "Books"  WHERE "Publisher"=' + '\'' + publisher +'\'' +'ORDER BY "Price" DESC LIMIT ' +numbersOfBooksPerPage.toString() + ' OFFSET ' + ((page-1)*numbersOfBooksPerPage).toString();
          }
          
          client.query( queryString, function (err, result2) {
          done();
          if(err){
              return console.log('error running query', err);
          }
          if(req.isAuthenticated())
          {
            res.render('user/shop',{layout: 'layout2',danhsach: result2 , username: req.user,numbersOfPages});
          }
          else
          {
            res.render('user/shop',{danhsach: result2,numbersOfPages});
          }
        });
      });
  });
  }