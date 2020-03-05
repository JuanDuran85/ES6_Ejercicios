var express = require("express");
var userController = require("../controllers/users");
var router = express.Router();

/* Post user  */ 
router.post("/", function(req, res, next) {
  let name = req.body.nombre;
  let lastname = req.body.apellido;
  let email = req.body.correo;
  let password = req.body.clave;
  let datos = {
    nombres : name,
    apellidos : lastname,
    correos : email,
    clave: password
  }
  userController.user_create(req, res, next);
});

module.exports = router;
