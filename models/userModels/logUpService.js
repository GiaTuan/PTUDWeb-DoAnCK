const pool = require('../../connection');
const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);

module.exports.getLogUp = function(req, res, next) {
    res.render('user/logup');
}

module.exports.getLogUpComplete = function(req,res,next){
    pool.connect(function(err, client, done){  
        console.log('SELECT * FROM "Users"  WHERE "account"='+ '\'' + req.body.username +'\' OR' + '"email"='+ '\'' + req.body.email);
        client.query('SELECT * FROM "Users"  WHERE "account"='+ '\'' + req.body.username +'\' OR' + '"email"='+ '\'' + req.body.email + '\'' , function (err, result) {
            if(err){
                return console.log('error running query', err);
            }
            if(result.rows[0] !== undefined)
            {
                let announce;
                if(result.rows[0].email === req.body.email)
                {
                    announce = "Email đã tồn tại";
                }
                else if(req.body.username === result.rows[0].account)
                {
                    announce = "Tài khoản đã tồn tại"
                }
                res.render('user/logup',{announce});
                
             }
            else
            {
                const password = req.body.password;
                const name = req.body.name;
                const email = req.body.email;
                const address = req.body.address;
                const phone = req.body.phone;
                bcrypt.genSalt(10, function(err, salt) {
                    bcrypt.hash(password, salt, function(err, hash) {
                        client.query('INSERT INTO "Users" VALUES (' + '\'' + req.body.username+ '\',\'' +hash + '\',\'' + name + '\',\'' + email + '\',\'' + address + '\',\'' + phone + '\');', function (err, result) {
                            done();
                            if(err){
                                return console.log('error running query', err);
                            }
                            res.render('user/logup-complete');
                        });
                    });
                }); 
            }
        });
    });
}