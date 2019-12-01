const LocalStrategy = require('passport-local').Strategy
const bcrypt = require('bcryptjs')
const pool = require('./connection');
module.exports = function(passport){
  passport.use(new LocalStrategy(
    function(username, password, done) {
      console.log('SELECT * FROM "Users"  WHERE "account"='+ '\'' + username +'\'');
      pool.query('SELECT * FROM "Users"  WHERE "account"='+ '\'' + username +'\'', function (err, user){
        if (err) { return done(err); }
        if (!user.rows[0]) {
          return done(null, false, { message: 'Incorrect username.' });
        }
        if(user.rows[0] !== undefined)
        {
          bcrypt.compare(password,user.rows[0].password , function(err, res) {
          if(err)
          {
            return console.log(err);
          }
          if(res)
          {
            return done(null, user);
          }
          else{
            return done(null, false, { message: 'Incorrect password.' });
          }
        });
        }
      });
    }
  ));
  passport.serializeUser(function(user, done) {
    done(null, user.rows[0].account);
  });
  
  passport.deserializeUser(function(username, done) {
    pool.query('SELECT * FROM "Users"  WHERE "account"='+ '\'' + username +'\'', function(err, user) {
      done(err, user.rows[0].account);
    });
  });
}