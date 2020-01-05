var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require("express-session")
var bodyParser = require("body-parser")
var passport = require('./passport');
var hbs = require('hbs');

//===================================================
var indexRouter = require('./routes/user/index')
var shopRouter = require('./routes/user/shop')
var logUpRouter = require('./routes/user/logup')
var logInRouter = require('./routes/user/login')
var logOutRouter =require('./routes/user/logout')
var userRouter =require('./routes/user/user')
var checkoutRouter = require('./routes/user/checkout')

var adminRouter =require('./routes/admin/index')

var app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.static("public"));
app.use(session({ secret: "cats" }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(passport.initialize());
app.use(passport.session());


//=================================================
app.use('/', indexRouter);
app.use('/shop', shopRouter);
app.use('/logup',logUpRouter);
app.use('/login',logInRouter);
app.use('/logout',logOutRouter);
app.use('/user',userRouter);
app.use('/admin',adminRouter);
app.use('/checkout',checkoutRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
