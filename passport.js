const LocalStrategy = require('passport-local').Strategy
const bcrypt = require('bcryptjs')
const pool = require('./connection');
module.exports = function(passport){
  passport.use('user-local',new LocalStrategy(
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

  //admin 
  passport.use('admin-local',new LocalStrategy(
    function(username, password, done) {
      pool.query('SELECT * FROM "Admin"  WHERE "adname"='+ '\'' + username +'\'', function (err, admin){
        if (err) { return done(err); }
        if (!admin.rows[0]) {
          return done(null, false, { message: 'Incorrect username.' });
        }
        if(admin.rows[0] !== undefined)
        {
          bcrypt.compare(password,admin.rows[0].password , function(err, res) {
          if(err)
          {
            return console.log(err);
          }
          if(res)
          {
            return done(null, admin);
          }
          else{
            return done(null, false, { message: 'Incorrect password.' });
          }
        });
        }
      });
    }
  ));
  var isAdmin;
  passport.serializeUser(function(user, done) {
    if(user.fields[0].name === 'adname')
    {
      isAdmin=true;
      done(null, user.rows[0].adname);
    }
    else
    { 
      isAdmin=false;
      done(null, user.rows[0].account);
    }
  });
  
  passport.deserializeUser(function(username, done) {
    console.log(isAdmin);
    if(isAdmin)
    {
      pool.query('SELECT * FROM "Admin"  WHERE "adname"='+ '\'' + username +'\'', function(err, user) {
      done(err, user.rows[0].adname);
      });
    }
    else
    {
      pool.query('SELECT * FROM "Users"  WHERE "account"='+ '\'' + username +'\'', function(err, user) {
      done(err, user.rows[0].account);
      });
    }

  });
}