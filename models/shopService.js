var pool= require('../connection.js');

module.exports.getShop = function(req, res, next) {

    pool.connect(function(err, client, done){
        if(err) {
            return console.log(err);
        }
        client.query("SELECT * FROM \"Books\" ORDER BY \"BookID\" ASC ", function (err, result) {
            done();
            if(err){
                return console.log('error running query', err);
            }
            res.render('shop',{danhsach: result});
        });
    });
}