var express = require('express');
var path = require('path');

var indexRouter = require('./routes/index');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

app.listen(3000, () => {
  console.log('Running on localhost:3000')
});

module.exports = app;