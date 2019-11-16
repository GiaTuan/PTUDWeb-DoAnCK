var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

//===================================================
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var nhaGiaKimRouter =require('./routes/books/Book1');
var sapiensRouter =require('./routes/books/Book2');
var matBiecRouter =require('./routes/books/Book3');
var thiHoiThoHoaThinhKhongRouter =require('./routes/books/Book4');
var dungLuaChonAnNhanKhiConTreRouter =require('./routes/books/Book5');
var tuoiTreDangGiaBaoNhieuRouter =require('./routes/books/Book6');
var dacNhanTamRouter =require('./routes/books/Book7');
var tonyBuoiSangRouter =require('./routes/books/Book8');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//=================================================
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/Book1',nhaGiaKimRouter);
app.use('/Book2',sapiensRouter);
app.use('/Book3',matBiecRouter);
app.use('/Book4',thiHoiThoHoaThinhKhongRouter);
app.use('/Book5',dungLuaChonAnNhanKhiConTreRouter);
app.use('/Book6',tuoiTreDangGiaBaoNhieuRouter);
app.use('/Book7',dacNhanTamRouter);
app.use('/Book8',tonyBuoiSangRouter);

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
