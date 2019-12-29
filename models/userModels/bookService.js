var pool=require('../../connection.js');

module.exports.getByID = function(id,req,res,next){

    ;(async () => {
        const client = await pool.connect();
        try {
          const result = await client.query('SELECT * FROM "Books"  WHERE "BookID"=' + '\'' + id +'\'');
          const comments = await client.query('SELECT * FROM "Comment" WHERE "ID"=' + '\'' + id +'\'' );
          const numberOfCmts = comments.rows.length;
          const numberOfCmtsPerPage = 2;
          const numberOfPages = parseInt(numberOfCmts/numberOfCmtsPerPage)+(numberOfCmts%numberOfCmtsPerPage === 0 ? 0 : 1);
          const page = req.query.page;
          console.log(numberOfPages);
          const result2 = await client.query('SELECT * FROM "Comment"  WHERE "ID"=' + '\'' + id +'\'' +'LIMIT ' +numberOfCmtsPerPage.toString() + ' OFFSET ' + ((page-1)*numberOfCmtsPerPage).toString());
          res.render('user/product',{danhsach: result, username: req.user,binhluan: result2, numberOfPages, isLogin: req.isAuthenticated()});
        } finally {
          client.release()
        }
      })().catch(err => next(err))
}


module.exports.AddComment = function(req,res,next){

    ;(async () => {
        const client = await pool.connect();
        try {
            const BookID = req.params.id ;
            const user = req.body.usercomment;
            const comment = req.body.comment;
            const result = await client.query('INSERT INTO "Comment" VALUES (\''+ user + '\',\'' + comment + '\',\'' + BookID + '\');' );
            res.redirect(req.get('referer'));      
        } finally {
          client.release()
        }
      })().catch(err => next(err))
} 