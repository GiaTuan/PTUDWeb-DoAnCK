const pool = require('../connection');
const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);

module.exports.getLogUp = function(req, res, next) {
    res.render('logup');
}

module.exports.getLogUpComplete = function(req,res,next){
    pool.connect(function(err, client, done){  
        client.query('SELECT account FROM "Users"  WHERE "account"='+ '\'' + req.body.username +'\'', function (err, result) {
            if(err){
                return console.log('error running query', err);
            }
            if(result.rows[0] !== undefined)
            {
                if(req.body.username === result.rows[0].account)
                {
                    res.render('logup',{announce: 'Tài khoản đã tồn tại'});
                }
             }
            else
            {
                const password = req.body.password;
                const name = req.body.name;
                const email = req.body.email;
                const address = req.body.address;
                const phone = req.body.phone;
                //console.log('INSERT INTO "testUser" VALUES (' + '\'' + req.body.username+ '\',\'' + req.body.password + '\',\'' + name + '\',\'' + email + '\',\'' + address + '\',\'' + phone + '\');'); 
                bcrypt.genSalt(10, function(err, salt) {
                    bcrypt.hash(password, salt, function(err, hash) {
                        client.query('INSERT INTO "Users" VALUES (' + '\'' + req.body.username+ '\',\'' +hash + '\',\'' + name + '\',\'' + email + '\',\'' + address + '\',\'' + phone + '\');', function (err, result) {
                            done();
                            if(err){
                                return console.log('error running query', err);
                            }
                            res.render('logup-complete');
                        });
                    });
                }); 
            }
        });
    });
}