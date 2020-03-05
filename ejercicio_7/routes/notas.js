//importando express
import express from 'express';
//utilizando la funcion de Router() de express.
const router = express.Router();

// importar el modelo nota creado en el archivo ubicado en models
import Nota from '../models/nota';

// Agregar una nota del tipo post con funcion asincrona
router.post('/nueva-nota', async(require, response) => {
  const body = require.body;  //se reciben todos los datos que vengan del body
  try { //intenta guardar lo que viene desde la solicitud
    const notaDB = await Nota.create(body); //se espera que la nota reciba todo el cuerpo de la nota
    response.status(200).json(notaDB); //cuando esta OK el estatus es 200
  } catch (error) {
    return response.status(500).json({
      mensaje: 'Ocurrio un error',
      error
    })
  }
});

// Exportamos la configuración de express creada en rotuer
module.exports = router;
