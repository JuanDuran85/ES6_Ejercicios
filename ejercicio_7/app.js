// se llama o solicita la libreria de express con el require
import express from 'express';

// se utiliza el express creado mediante el llamado como funcion
let app = express();

// llamando a la libreria de morgan
import morgan from 'morgan';

// para acceder al directorio actual
import path from 'path';

// se agregar cors al servidor
import cors from "cors";


// express utilizara la libreria de morgan con la configuracion tiny (configuracion recomendada por la pagina de express)
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
//se trabaja con solicitudes o respuestas www
app.use(express.urlencoded({ extended: true }));
//se accede a la ruta principal accediendo a la ruta entregada por el servidor
app.use(express.static(path.join(__dirname, 'public')));

// se llama a una ruta en especifico, luego se pasa una funcion que recibe dos parametros.
app.get('/',function (req,res) {  
    res.send("Mensaje desde Express como Servidor local");
});

//para configurar el puerto dinamicamente, es decir, que se modifique de acuerdo a las caracteristicas asignadas por el servidor.

app.set("puerto_asignado", process.env.PORT || 3000);

//se escucha un puerto en especifico para que corra el servidor local
app.listen(app.get('puerto_asignado'), function () {
    console.log("mensaje desde el puerto 3000");
});

/*

- para ejecutar el servidor se debe ingesar los comandos en el terminar de node app.js

- para tener un escucha o wacth que procese los cambios automaticamente en el documento raiz (app.js), se puede instalar globalmente el nodemon con: npm install nodemon -g

- Posteriormente e agrega al package.json el script: "dev":"nodemon app.js" lo cual permitira ejecutar el escucha con nodemon desde el terminal con npm run dev 

- se instala morgan para visualizar en la terminal las peticiones que se hagan en le servidor. Se debe utilizar el comando npm install morgan --save

- los middleware son algunas funciones que se requieren antes de consumir las rutas. Lo cual, pinta las rutas que solicita el cliente y luego responde.

- CORS se utiliza para configurar el servidor para poder usar peticiones desde otro dominio. Para instalar vors se utiliza npm install cors --save

- Se utiliza JSON para las respuestas.

- configurar una ruta estatica. Se crea una carpeta public con un archivo de ejemplo en html. 

-Eñ path permite ubicarnos dentro del servidor.

- para poder llevar el codigo completamente a un ES6, es necesario trabar con babel.
*/