var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Saludos desde archivo JS con NodeJS y ExpressJS como servidor local');
});

app.listen(3000, function () {
  console.log('trabajando en el puerto 3000 del servidor local!');
});