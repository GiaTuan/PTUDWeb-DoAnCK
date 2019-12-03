var pool=require('../../connection.js');

module.exports.getByID = function(id,req,res,next){

    pool.connect(function(err, client, done){
    if(err) {
        return console.log(err);
    }
    
    client.query('SELECT * FROM "Books"  WHERE "BookID"=' + '\'' + id +'\'' , function (err, result) {
        done();
        if(err){
            return console.log('error running query', err);
        }
        if(req.isAuthenticated())
        {
          res.render('user/product',{layout: 'layout2',danhsach: result, username: req.user});
        }
        else
        {
            res.render('user/product',{danhsach : result});
        }
        });
    });
}