var express = require("express");
var userController = require("../controllers/users");
var router = express.Router();

/* Post user  */ 
router.post("/", function(req, res, next) {
  userController.user_create(req, res, next);
  let nombre = req.body.nombre;
  let apellido = req.body.apellido;
  let correo = req.body.correo;
  let clave = req.body.clave;
  res.send(`
    <table>
      <tbody>
        <tr>
          <td>Nombre</td>
          <td>Apellido</td>
          <td>Correo</td>
          <td>Clave</td>
        </tr>
        <tr>
          <td>${nombre}</td>
          <td>${apellido}</td>
          <td>${correo}</td>
          <td>${clave}</td>
        </tr>
      </tbody>
    </table>  
  `);

});

module.exports = router;
