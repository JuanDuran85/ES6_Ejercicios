import createError from 'http-errors';
import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import cors from 'cors';

import indexRouter from './routes/index';

var app = express();

// Conexión base de datos
const mongoose = require('mongoose');

const uri = 'mongodb://localhost:27017/myapp';
const options = {
  useNewUrlParser: true, 
  useCreateIndex: true,
  useUnifiedTopology: true
};

// Or using promises
mongoose.connect(uri, options).then(
  /** ready to use. The `mongoose.connect()` promise resolves to mongoose instance. */
  () => { 
    console.log('Conectado a DB') 
  },
  /** handle initial connection error */
  err => { 
    console.log(err);
  }
);

// view engine setup
// app.set('views', path(__dirname, 'views'));
app.set('view engine', 'ejs');
app.set('puerto', process.env.PORT || 3000);
app.listen(app.get('puerto'), function () {
  console.log('Example app listening on port'+ app.get('puerto'));
});

app.use(logger('tiny'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());
//application/x-www-form-urlencoded
app.use('/', indexRouter);
app.use('/api', require('./routes/nota'));
// catch 404 and forward to error handler error
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

export default app;
