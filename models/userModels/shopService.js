var pool= require('../../connection.js');

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
            if(req.isAuthenticated())
            {
              res.render('user/shop',{layout: 'layout2',danhsach: result , username: req.user});
            }
            else
            {
                res.render('user/shop',{danhsach: result});
            }
        });
    });
}