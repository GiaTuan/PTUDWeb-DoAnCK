var express = require('express');
var router = express.Router();
var pool=require('../connection.js');
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express' });
  pool.connect(function(err, client, done){
    // Handle connection errors
    if(err) {
        return console.log(err);
    }
    // SQL Query > Insert Data
    client.query('SELECT * FROM "RecommendBooks"', function (err, result1) {
        client.query('SELECT * FROM "FavoriteBooks"', function (err, result2) {
          res.render('index',{danhsach: result1,danhsach2: result2});
        });
    });
  });
});
module.exports = router;


/* */