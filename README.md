## ¿Que es ECMAScript 6 o ES6?

Asociación Europea de fabricantes de computadoras o  European Computer Manufacturers Association (ECMA ).

ECMAScript es estándar para la implementación de JavaScript que se creó para hacer que el código sea más uniforme entre los navegadores. Por lo tanto, es una especificación de lenguaje de programación publicada por ECMA International. ECMAScript 6 también se conoce como ES6 y ECMAScript 2015.

## ¿Qué es babel?

Básicamente, Babel es un compilador de JavaScript. En otras palabras más técnicas, Babel es una cadena de herramientas que se utiliza principalmente para convertir el código ECMAScript 2015+ (ES6) en una versión de JavaScript compatible con versiones anteriores en navegadores o entornos actuales y anteriores, es decir, transformar la sintaxis actual de ES6 en versiones anteriores. Ejemplo:

```JS
// Entrada en Babel: ES6 -> función de flecha
[1, 2, 3].map((n) => n + 1);

// Salida con Babel: ES5 -> equivalente
[1, 2, 3].map(function(n) {
  return n + 1;
});
```

## Instalación de Babel

Para instalar babel en nuestro proyecto, se debe ejecutar los siguientes comando por el terminal (recuerda que debes disponer anteriormente de NodeJS y NPM).

```bash
npm install --save-dev @babel/core @babel/cli @babel/preset-env
npm install --save @babel/polyfill
```


## ¿Que es WebPack?

Webpack es un paquete de módulos estáticos para aplicaciones JavaScript modernas. Cuando webpack procesa su aplicación, internamente crea un gráfico de dependencia que asigna cada módulo que su proyecto necesita y genera uno o más paquetes.

# Instalando Webpack y Babel, pasos:

1. Verificar si posee NodeJS y NPM con:

```bash
node -v
npm -v
```

2. Crear la carpeta del proyecto. Sin espacios entre caracteres.
3. Entrar a la carpeta mediante la terminal.
4. Inicar el instalador de NodeJS

```bash
npm init -y
```

5. Se instala el WebPack con:

```bash
npm install webpack --save-dev
```

*Nota:* si esta paso u otro de install con npm genera vulnerabilidades, se debe ejecutar el `npm audit --force` para solicionar los detalles.

6. Instalar el Webpack Cli con:

```bash
npm install webpack-cli --save-dev
```

7. Crear una carpeta de src y dentro de ella el index.js y en la carpeta raiz el index.html

8. Ejecutar en el terminal los comandos de:

```bash
npx webpack
```

Nota: se genera un WARNING debido a que estamos trabajando en modo de producción. (normal)

9. Crear el archivo en la carpeta raiz de webpack.config.js.

10. Se mueve el archivo index.html a la carpeta dist creada en pasos anteriores.

11. Crear el enlace en el archivo index.html al archivo main.js

12. En el archivo de configuración de WebPack se copia el codigo:

```JS
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  }
};
```

13. Se ejecuta el comando a continuación para compilar segun la configuracion del archivo webpack.config.js:

```bash
npx webpack --config webpack.config.js
```

14. Agregar el archivo compilado al index.html en el script.

15. Agregar al archivo de packge.json el siguiente script:

```JS
"build": "webpack --mode development",
```

16. Ejecutar el comando `npm run build`

17. Agregar al archivo de packge.json el siguiente script:

```JS
 "produccion": "webpack -p",
```

18. Ejecutar el comando `npm run produccion`

19. Agregar al archivo de packge.json el siguiente script:

```JS
 "watch": "webpack --w --mode development"
```

20. Ejecutar el comando `npm run watch`

21. Instalar Babel utilizando la pagina de [Babel Setup](https://babeljs.io/setup#installation). Ejecutando el comando:

```bash
 npm install @babel/preset-env --save-dev
```

22. Crear en la raiz del repositorio el archivo .babelrc y agregar el json en el archivo .babelr:

```JS
{
  "presets": ["@babel/preset-env"]
}
```

23. Agregar lo siguiente al module/exports dentro de webpack.config:

```JS
module: {
  rules: [
    { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
  ]
}
```

24. Instalar Babel-Loader mediante la instrucción:

```bash
npm install --save-dev babel-loader @babel/core
```

25. Ejecutar nuevamente `npm run build` para compilar el proyecto ahora aplicando Babel al código final. 

# Módulos en JS

En ECMAScript 6 se introduce una característica nativa denominada Módulos ES6, que permite la importación y exportación de código entre diferentes ficheros Javascript, eliminando las desventajas que teníamos hasta ahora y permitiendo trabajar de forma más flexible desde el código Javascript.

Para trabajar con módulos tenemos a nuestra disposición las siguientes palabras clave:

* export: Exporta uno o varios elementos (variables, funciones, clases...) del fichero actual.

* import: Importa uno o varios elementos (variables, funciones, clases...) desde otro fichero .js

Para mayor informacion, pueden visitar:

* [Módulos ES6](https://lenguajejs.com/p/javascript/caracteristicas/modulos-es6).
* [ES6 Modules](https://desarrolloweb.com/articulos/es6-modules.html)

# Programación Orientada a Objetos en ES6

* ¿Cuáles son los paradigmas de programación?
  - Funcional
  - Imperativo
  - Lógico
  - Declarativo
  - POO
  - Por Procedimientos.

* ¿Que es el paradigma de programación orientado a objetos?

Se plantea que el principal protagonista sean las clases. Colección de objetos que están interrelacionados y trabajan conjuntamente para resolver un problema. Se basa en lo cotidiano para dar posibles soluciones a problemas.

* ¿Qué es una clase? 
Plantillas para la creación de objetos. Características, atributos, propiedades.

* ¿Qué es un objeto? 
Tienen los métodos y funciones.

* ¿Qué es una instancia? 
Creación del objeto o inicio de un objeto a partir de una clase.

* ¿Qué es un método?

Operación que se realiza en el objeto, instrucciones.

## Clases y sus metodos en ES6.

### Método static en ES6

Un método estático se construye simplemente indicando la palabra "static" antes del nombre del método que se está creando. El resto de la definición de un método estático sería igual que la definición de un método convencional, con la excepción de disponer de la variable "this" como habitualmente en los métodos. 

Los métodos estáticos se suelen utilizar para crear funciones de apoyo que realicen tareas concretas o genéricas, que queremos incluir en la clase porque están relacionadas con la clase en cuestión, es decir, que pueden ser invocados desde la clase sin necesidad de que se cree una instancia de la misma. Para ello tenemos que poner la palabra static antes del nombre del método.

Nota: El hecho de no poder disponer de "this" dentro de un método estático es debido a que el método no se invoca con relación a ningún objeto.

## Para mayor información, visita:
* [Caracteristicas de las clases en ES6](https://lenguajejs.com/p/javascript/caracteristicas/clases-es6)
