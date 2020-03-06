var express = require("express");

var router = express.Router();

/* Post user  */ 
// router.post("/ejemplo",  async(req, res) => {
//   const body = req.body;  
//   try {
//     const notaDB = await User.create(body);
//     res.status(200).json(notaDB); 
//   } catch (error) {
//     return res.status(500).json({
//       mensaje: 'Ocurrio un error',
//       error
//     })
//   }
// });

module.exports = router;
