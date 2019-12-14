var pool = require('../../connection.js');
module.exports.getLanguage = function(req, res, next) {
  
    //res.render('index', { title: 'Express' });
    pool.connect(function(err, client, done){
      // Handle connection errors
      if(err) {
          return console.log(err);
      }

      client.query('SELECT * FROM "Books"  WHERE "BookLanguage"=' + '\'' + req.params.id +'\'' , function (err, result) {
          const page = req.query.page;
          const sort = req.query.sort;

          const numbersOfBooksPerPage = 6;

          const numbersOfBooks = result.rows.length;
          const numbersOfPages = parseInt(numbersOfBooks/numbersOfBooksPerPage)+(numbersOfBooks%numbersOfBooksPerPage === 0 ? 0 : 1);
          
          let queryString;
          if(sort === undefined)
          {
              queryString= 'SELECT * FROM "Books"  WHERE "BookLanguage"=' + '\'' + req.params.id +'\'' +' LIMIT ' +numbersOfBooksPerPage.toString() + ' OFFSET ' + ((page-1)*numbersOfBooksPerPage).toString();
          }
          else if(sort === 'asc')
          {
            queryString= 'SELECT * FROM "Books"  WHERE "BookLanguage"=' + '\'' + req.params.id +'\'' +'ORDER BY "Price" ASC LIMIT ' +numbersOfBooksPerPage.toString() + ' OFFSET ' + ((page-1)*numbersOfBooksPerPage).toString();
          }
          else if(sort === 'desc')
          {
            queryString= 'SELECT * FROM "Books"  WHERE "BookLanguage"=' + '\'' + req.params.id +'\'' +'ORDER BY "Price" DESC LIMIT ' +numbersOfBooksPerPage.toString() + ' OFFSET ' + ((page-1)*numbersOfBooksPerPage).toString();
          }

          client.query(queryString , function (err, result2) 
          {
            done();
            if(err){
                return console.log('error running query', err);
            }
            console.log(result2.rows.length);
            if(req.isAuthenticated())
            {
              res.render('user/shop',{layout: 'layout2',danhsach: result2 , username: req.user,numbersOfPages});
            }
            else
            {
              res.render('user/shop',{danhsach: result2,numbersOfPages });
            }
        });
      });
  });
}