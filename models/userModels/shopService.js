var pool= require('../../connection.js');

module.exports.getShop = function(req, res, next) {
    pool.connect(function(err, client, done){
        if(err) {
            return console.log(err);
        }
        client.query("SELECT * FROM \"Books\" ORDER BY \"BookID\" ASC ", function (err, result) {
            if(err){
                return console.log('error running query', err);
            }
            const page = req.query.page;
            const numbersOfBooksPerPage = 6;
            const numbersOfBooks = result.rows.length;
            const numbersOfPages = parseInt(numbersOfBooks/numbersOfBooksPerPage)+(numbersOfBooks%numbersOfBooksPerPage === 0 ? 0 : 1);

            client.query('SELECT * FROM "Books" ORDER BY "BookID" ASC '+'LIMIT ' +numbersOfBooksPerPage.toString() + ' OFFSET ' + ((page-1)*numbersOfBooksPerPage).toString() , function (err, result2) {
                done();
                if(err){
                    return console.log(err);
                }
                console.log(numbersOfPages);
                if(req.isAuthenticated())
                {
                res.render('user/shop',{layout: 'layout2',danhsach: result2 , username: req.user , numbersOfPages});
                }
                else
                {
                    res.render('user/shop',{danhsach: result2, numbersOfPages});
                }
            })
        });
    });
}