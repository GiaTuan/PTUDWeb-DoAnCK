const pool = require('../../connection');
module.exports.getType= function(req, res, next) {
    pool.connect(function(err, client, done)
    {
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
            const page = req.query.page;
            const numbersOfBooksPerPage = 6;

            const numbersOfBooks = result.rows.length;
            const numbersOfPages = parseInt(numbersOfBooks/numbersOfBooksPerPage)+(numbersOfBooks%numbersOfBooksPerPage === 0 ? 0 : 1);
          
            client.query('SELECT * FROM "Books"  WHERE "Type"=' + '\'' + type +'\' ' +'LIMIT ' +numbersOfBooksPerPage.toString() + ' OFFSET ' + ((page-1)*numbersOfBooksPerPage).toString()  , function (err, result2){
                done();
                if(err)
                {
                    return console.log('error running query', err);
                }
                if(req.isAuthenticated())
                {
                    res.render('user/shop',{layout: 'layout2',danhsach: result2 , username: req.user, numbersOfPages});
                }
                else
                {
                  res.render('user/shop',{danhsach: result2, numbersOfPages});
                }
            });
        });
    });
}