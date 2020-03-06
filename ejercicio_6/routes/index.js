var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/inicio', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get("/mostrar", (req,res)=>{
  res.send(200,{productos:["e1","e2","e3"]});
});

router.post("/inicio",(req,res)=>{
  console.log(req.body);
  res.status(200).send({message: "Informacion recibida"})
});

module.exports = router;
