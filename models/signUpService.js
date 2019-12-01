const pool = require('../connection');
const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);
const hash = bcrypt.hashSync("B4c0/\/", salt);

module.exports.getSignUp = function(req, res, next) {
    res.render('sign-up');
}

module.exports.getSignUpComplete = function(req,res,next){
    pool.connect(function(err, client, done){  
        client.query('SELECT account FROM "testUser"  WHERE "account"='+ '\'' + req.body.username +'\'', function (err, result) {
            if(err){
                return console.log('error running query', err);
            }
            if(result.rows[0] !== undefined)
            {
                if(req.body.username === result.rows[0].account)
                {
                    res.render('sign-up',{announce: 'Tài khoản đã tồn tại'});
                }
             }
            else
            {
                const password = req.body.password;
                console.log('INSERT INTO "testUser"(account,password) VALUES (' + '\'' + req.body.username+ '\',\'' + req.body.password +'\');');
                bcrypt.genSalt(10, function(err, salt) {
                    bcrypt.hash(password, salt, function(err, hash) {
                        client.query('INSERT INTO "testUser"(account,password) VALUES (' + '\'' + req.body.username+ '\',\'' + hash +'\');', function (err, result) {
                            if(err){
                                return console.log('error running query', err);
                            }
                            res.render('sign-up-complete');
                        });
                    });
                }); 
            }
        });
    });
}