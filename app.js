var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

//===================================================
var indexRouter = require('./routes/index');
var shopRouter = require('./routes/shop');
var nhaGiaKimRouter =require('./routes/books/Book1');
var sapiensRouter =require('./routes/books/Book2');
var matBiecRouter =require('./routes/books/Book3');
var thiHoiThoHoaThinhKhongRouter =require('./routes/books/Book4');
var dungLuaChonAnNhanKhiConTreRouter =require('./routes/books/Book5');
var tuoiTreDangGiaBaoNhieuRouter =require('./routes/books/Book6');
var dacNhanTamRouter =require('./routes/books/Book7');
var tonyBuoiSangRouter =require('./routes/books/Book8');
var harryPotterRouter =require('./routes/books/Book9');
var docViBatKyAiRouter =require('./routes/books/Book10');



var NhaNamRouter =require('./routes/publishers/NXB-NhaNam');
var HoiNhaVanRouter =require('./routes/publishers/NXB-HNV');
var TriThucRouter =require('./routes/publishers/NXB-TriThuc');
var TreRouter =require('./routes/publishers/NXB-Tre');
var TheGioiRouter =require('./routes/publishers/NXB-TheGioi');
var TongHopRouter =require('./routes/publishers/NXB-TH');
var LaoDongRouter =require('./routes/publishers/NXB-LaoDong');



var VanHocRouter =require('./routes/type/VanHoc');
var TieuThuyetRouter =require('./routes/type/TieuThuyet');
var TuTruyenRouter =require('./routes/type/TuTruyen');


var VietNamRouter =require('./routes/language/VietnameseBooks');
var ForeignRouter =require('./routes/language/ForeignLanguageBooks');

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
app.use('/shop', shopRouter);
app.use('/Book1',nhaGiaKimRouter);
app.use('/Book2',sapiensRouter);
app.use('/Book3',matBiecRouter);
app.use('/Book4',thiHoiThoHoaThinhKhongRouter);
app.use('/Book5',dungLuaChonAnNhanKhiConTreRouter);
app.use('/Book6',tuoiTreDangGiaBaoNhieuRouter);
app.use('/Book7',dacNhanTamRouter);
app.use('/Book8',tonyBuoiSangRouter);
app.use('/Book9',harryPotterRouter);
app.use('/Book10',docViBatKyAiRouter);




app.use('/NXB-NhaNam',NhaNamRouter);
app.use('/NXB-HNV',HoiNhaVanRouter);
app.use('/NXB-TriThuc',TriThucRouter);
app.use('/NXB-Tre',TreRouter);
app.use('/NXB-TheGioi',TheGioiRouter);
app.use('/NXB-TH',TongHopRouter);
app.use('/NXB-LaoDong',LaoDongRouter);


app.use('/VietnameseBooks',VietNamRouter);
app.use('/ForeignLanguageBooks',ForeignRouter);


app.use('/VanHoc',VanHocRouter);
app.use('/TieuThuyet',TieuThuyetRouter);
app.use('/TuTruyen',TuTruyenRouter);


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
