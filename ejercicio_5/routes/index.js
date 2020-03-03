var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var datos = {
    "nombre": "Juan",
    "apellido": "Duran",
    "telefono": "+56-94-075-86-54",
    "titulo": "Express",
    "mensaje": "Mensaje desde Express con el render"
  }
  res.render('index', datos);
});

module.exports = router;
