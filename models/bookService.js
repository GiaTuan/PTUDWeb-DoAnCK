var pool=require('../connection.js');

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
        res.render('product',{danhsach : result});
        });
    });
}