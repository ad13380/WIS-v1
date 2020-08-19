var createError = require('http-errors');
var express = require('express');
var path = require('path');

var indexRouter = require('./routes/index');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

app.use('/test', (req, res) => {
  res.render('test')
})

app.use(function(req, res, next) {
  next(createError(404));
});

app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = err

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;