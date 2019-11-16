var express = require('express');
var router = express.Router();
var pool=require('../../connection.js');
router.get('/', function(req, res, next) {
  
  //res.render('index', { title: 'Express' });
  pool.connect(function(err, client, done){
    // Handle connection errors
    if(err) {
        return console.log(err);
    }
    // SQL Query > Insert Data
    client.query("SELECT * FROM \"FavoriteBooks\"  WHERE \"BookID\"='Book6'", function (err, result) {
        done();
        if(err){
            return console.log('error running query', err);
        }
        res.render('product',{danhsach: result});
    });
});
});

module.exports = router;
