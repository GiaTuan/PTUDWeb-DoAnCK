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
          const numbersOfBooksPerPage = 6;

          const numbersOfBooks = result.rows.length;
          const numbersOfPages = parseInt(numbersOfBooks/numbersOfBooksPerPage)+(numbersOfBooks%numbersOfBooksPerPage === 0 ? 0 : 1);
          console.log('SELECT * FROM "Books"  WHERE "BookLanguage"=' + '\'' + req.params.id +'\'' +' LIMIT ' +numbersOfBooksPerPage.toString() + ' OFFSET ' + ((page-1)*numbersOfBooksPerPage).toString());
          client.query('SELECT * FROM "Books"  WHERE "BookLanguage"=' + '\'' + req.params.id +'\'' +' LIMIT ' +numbersOfBooksPerPage.toString() + ' OFFSET ' + ((page-1)*numbersOfBooksPerPage).toString(), function (err, result2) 
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