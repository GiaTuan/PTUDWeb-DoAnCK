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
            const sort = req.query.sort;
            
            const numbersOfBooksPerPage = 6;
            const numbersOfBooks = result.rows.length;
            const numbersOfPages = parseInt(numbersOfBooks/numbersOfBooksPerPage)+(numbersOfBooks%numbersOfBooksPerPage === 0 ? 0 : 1);

            let queryString;
            if(sort === 'asc')
            {
                queryString= 'SELECT * FROM "Books" ORDER BY "Price" ASC '+'LIMIT ' +numbersOfBooksPerPage.toString() + ' OFFSET ' + ((page-1)*numbersOfBooksPerPage).toString();
            }
            else if(sort === 'desc')
            {
                queryString= 'SELECT * FROM "Books" ORDER BY "Price" DESC '+'LIMIT ' +numbersOfBooksPerPage.toString() + ' OFFSET ' + ((page-1)*numbersOfBooksPerPage).toString();
            }
            else
            {
                queryString= 'SELECT * FROM "Books" ORDER BY "BookID" ASC '+'LIMIT ' +numbersOfBooksPerPage.toString() + ' OFFSET ' + ((page-1)*numbersOfBooksPerPage).toString();
            }
            client.query(queryString , function (err, result2) {
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

module.exports.getFind = function(req,res,next){
    pool.connect(function(err, client, done){
        if(err) {

            return console.log(err);
        }
        let gia = req.query.gia;
        let theloai = req.query.theloai;
        let lang = req.query.lang;
        if(gia === 'lt100')
        {
            gia = '< 100000';
        }
        else if(gia === 'gte100')
        {
            gia = '>= 100000';
        }
  
        if(theloai === 'tieuthuyet')
        {
            theloai = 'Tiểu thuyết';
        }
        else if(theloai === 'tutruyen')
        {
            theloai = 'Tự truyện';
        }
        else if(theloai === 'vanhoc')
        {
            theloai = 'Văn học';
        }
  
        if(lang === 'tiengviet')
        {
            lang='Vietnamese';
        }
        else if(lang ==='ngoaingu')
        {
            lang = 'Foreign';
        }
        
        let where = 'WHERE';
        
        let x=0;
        if(gia !== '')
        {
            where += ' "Price" '+gia ;
            x++;
        }
        if(theloai !== '')
        {
            if(x===1)
            {
                where += " AND " 
                x--;
            }
            where +=  ' "Type"= ' + '\'' + theloai + '\'';
            x++;
        }
        if(lang !== '')
        {
            if(x===1)
            {
                where += " AND " 
            }
            where +=  ' "BookLanguage"= ' + '\''+ lang + '\'';
        }
        client.query('SELECT * FROM "Books" ' +where+ ' ORDER BY "BookID" ASC ', function (err, result) {
            if(err)
            {
                return console.log('error running query', err);
            }
            const page = req.query.page;
            const sort = req.query.sort;
            
            const numbersOfBooksPerPage = 6;
            const numbersOfBooks = result.rows.length;
            const numbersOfPages = parseInt(numbersOfBooks/numbersOfBooksPerPage)+(numbersOfBooks%numbersOfBooksPerPage === 0 ? 0 : 1);
  
            let queryString;
            if(sort === 'asc')
            {
                queryString= 'SELECT * FROM "Books" ' +where+ ' ORDER BY "Price" ASC '+'LIMIT ' +numbersOfBooksPerPage.toString() + ' OFFSET ' + ((page-1)*numbersOfBooksPerPage).toString();
            }
            else if(sort === 'desc')
            {
                queryString= 'SELECT * FROM "Books" ' +where+ ' ORDER BY "Price" DESC '+'LIMIT ' +numbersOfBooksPerPage.toString() + ' OFFSET ' + ((page-1)*numbersOfBooksPerPage).toString();
            }
            else
            {
                queryString= 'SELECT * FROM "Books" ' +where+ ' ORDER BY "BookID" ASC '+'LIMIT ' +numbersOfBooksPerPage.toString() + ' OFFSET ' + ((page-1)*numbersOfBooksPerPage).toString();
            }
            client.query(queryString , function (err, result2) 
            {
                done();
                if(err)
                {
                    return console.log(err);
                }
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