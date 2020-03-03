/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/clases/herencia.js":
/*!********************************!*\
  !*** ./src/clases/herencia.js ***!
  \********************************/
/*! exports provided: Forma */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Forma\", function() { return Forma; });\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n// Clase padre\nvar Forma = /*#__PURE__*/function () {\n  function Forma() {\n    _classCallCheck(this, Forma);\n\n    console.log('Soy una forma geométrica.');\n  }\n\n  _createClass(Forma, [{\n    key: \"gritar\",\n    value: function gritar() {\n      console.log('YEP!!');\n    }\n  }]);\n\n  return Forma;\n}(); // Clases hijas\n\nvar Cuadrado = /*#__PURE__*/function (_Forma) {\n  _inherits(Cuadrado, _Forma);\n\n  function Cuadrado() {\n    var _this;\n\n    _classCallCheck(this, Cuadrado);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(Cuadrado).call(this));\n    console.log('Soy un cuadrado.');\n    return _this;\n  }\n\n  return Cuadrado;\n}(Forma);\n\nvar Circulo = /*#__PURE__*/function (_Forma2) {\n  _inherits(Circulo, _Forma2);\n\n  function Circulo() {\n    var _this2;\n\n    _classCallCheck(this, Circulo);\n\n    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(Circulo).call(this));\n    console.log('Soy un círculo.');\n    return _this2;\n  }\n\n  return Circulo;\n}(Forma);\n\nvar Triangulo = /*#__PURE__*/function (_Forma3) {\n  _inherits(Triangulo, _Forma3);\n\n  function Triangulo() {\n    var _this3;\n\n    _classCallCheck(this, Triangulo);\n\n    _this3 = _possibleConstructorReturn(this, _getPrototypeOf(Triangulo).call(this));\n    console.log('Soy un triángulo.');\n    return _this3;\n  }\n\n  return Triangulo;\n}(Forma); //let formas = new Forma();\n\n\nvar cuadrado = new Cuadrado();\n\n//# sourceURL=webpack:///./src/clases/herencia.js?");

/***/ }),

/***/ "./src/clases/nombres.js":
/*!*******************************!*\
  !*** ./src/clases/nombres.js ***!
  \*******************************/
/*! exports provided: Nombres */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Nombres\", function() { return Nombres; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Nombres = /*#__PURE__*/function () {\n  function Nombres(nombre1, nombre2) {\n    _classCallCheck(this, Nombres);\n\n    this.nombre1 = nombre1;\n    this.nombre2 = nombre2;\n  }\n\n  _createClass(Nombres, [{\n    key: \"mostrarNombre1\",\n    value: function mostrarNombre1() {\n      return this.nombre1;\n    }\n  }, {\n    key: \"mostrarNombre2\",\n    value: function mostrarNombre2() {\n      return this.nombre2;\n    }\n  }]);\n\n  return Nombres;\n}();\nvar nombreUsuario1 = new Nombres(\"Juan\", \"Maria\");\nvar nombreUsuario2 = new Nombres(\"Paola\", \"Simon\");\nconsole.log(nombreUsuario1.mostrarNombre1());\nconsole.log(nombreUsuario1.mostrarNombre2());\nconsole.log(nombreUsuario2.mostrarNombre1());\nconsole.log(nombreUsuario2.mostrarNombre2());\n\n//# sourceURL=webpack:///./src/clases/nombres.js?");

/***/ }),

/***/ "./src/clases/punto.js":
/*!*****************************!*\
  !*** ./src/clases/punto.js ***!
  \*****************************/
/*! exports provided: Punto, Animal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Punto\", function() { return Punto; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Animal\", function() { return Animal; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n/* realizar un programa mediante clases que muestre la distancia entre dos puntos en el plano cartesiano ingresados en la creación de la instancia de la clase, utilizar el metodo static para calcular la distancia */\nvar Punto = /*#__PURE__*/function () {\n  function Punto(x, y) {\n    _classCallCheck(this, Punto);\n\n    this.x = x;\n    this.y = y;\n  }\n\n  _createClass(Punto, [{\n    key: \"mostrarX\",\n    value: function mostrarX() {\n      console.log(this.x);\n    }\n  }, {\n    key: \"mostrarY\",\n    value: function mostrarY() {\n      console.log(this.y);\n    } //Los métodos estáticos se suelen utilizar para crear funciones de apoyo que realicen tareas concretas o genéricas, que queremos incluir en la clase porque están relacionadas con la clase en cuestión, es decir, que pueden ser invocados desde la clase sin necesidad de que se cree una instancia de la misma.\n\n  }], [{\n    key: \"distancia\",\n    value: function distancia() {\n      alert(\"mensaje desde metodo estatico\");\n    }\n  }]);\n\n  return Punto;\n}();\nconsole.log(\"La distancia entre dos puntos es: \".concat(Punto.distancia()));\nconsole.log('//--------Clase Animal---------//');\nvar Animal = /*#__PURE__*/function () {\n  function Animal(nombre_perro) {\n    _classCallCheck(this, Animal);\n\n    this.nombre2 = nombre_perro;\n  }\n\n  _createClass(Animal, [{\n    key: \"quienSoy\",\n    value: function quienSoy() {\n      return \"Hola, soy \".concat(this.nombre2);\n    }\n  }, {\n    key: \"nombre\",\n    get: function get() {\n      return \"El perro es: \".concat(this._nombre2);\n    },\n    set: function set(nombre_perro) {\n      /*en lugar de hacer referencia al mismo nombre, se puede usar el patrón de prefijar cada variable local con un guión bajo, en comparación con el nombre público. */\n      this._nombre2 = nombre_perro.trim();\n    }\n  }]);\n\n  return Animal;\n}(); // Creación de objetos\n\nvar perro = new Animal('Pastor Aleman');\nconsole.log(perro.nombre2);\nconsole.log(perro.quienSoy());\nconsole.log(perro.nombre = '   Lucas  ');\nconsole.log(perro.nombre);\nconsole.log(perro.quienSoy());\n\n//# sourceURL=webpack:///./src/clases/punto.js?");

/***/ }),

/***/ "./src/clases/triangulo.js":
/*!*********************************!*\
  !*** ./src/clases/triangulo.js ***!
  \*********************************/
/*! exports provided: Triangulo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Triangulo\", function() { return Triangulo; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Triangulo = /*#__PURE__*/function () {\n  function Triangulo(base, altura) {\n    _classCallCheck(this, Triangulo);\n\n    this.altura = altura;\n    this.base = base;\n  }\n\n  _createClass(Triangulo, [{\n    key: \"area\",\n    value: function area() {\n      return this.altura * this.base / 2;\n    }\n  }]);\n\n  return Triangulo;\n}();\nvar areaTriangulo = new Triangulo(3, 4);\nconsole.log(areaTriangulo.area());\n\n//# sourceURL=webpack:///./src/clases/triangulo.js?");

/***/ }),

/***/ "./src/clases/usuario.js":
/*!*******************************!*\
  !*** ./src/clases/usuario.js ***!
  \*******************************/
/*! exports provided: Usuario */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Usuario\", function() { return Usuario; });\n/* harmony import */ var _triangulo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./triangulo */ \"./src/clases/triangulo.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n//Trabajando con clases en ES6\n//Realizar un ejemplo que cree una clase con los datos básicos de un usuario (nombre, apellido, rut, edad), y muestre la inforamción mediante un método denominado mostrarInfo(). Los parametros se deben pasar por la instancia de la clase.\nvar Usuario = /*#__PURE__*/function () {\n  function Usuario(nombre, apellido, edad, rut) {\n    _classCallCheck(this, Usuario);\n\n    this.nombre = nombre;\n    this.apellido = apellido;\n    this.edad = edad;\n    this.rut = rut;\n  }\n\n  _createClass(Usuario, [{\n    key: \"mostrarInfo\",\n    value: function mostrarInfo() {\n      return console.log(\"El nombre es: \".concat(this.nombre, \", el apellido es: \").concat(this.apellido, \", el Rut es: \").concat(this.rut, \" y la edad es: \").concat(this.edad));\n    }\n  }]);\n\n  return Usuario;\n}();\nvar persona = new Usuario(\"Maria\", \"Perez\", 35, 232343);\npersona.mostrarInfo();\n\n\n//# sourceURL=webpack:///./src/clases/usuario.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _clases_nombres__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clases/nombres */ \"./src/clases/nombres.js\");\n/* harmony import */ var _clases_usuario__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clases/usuario */ \"./src/clases/usuario.js\");\n/* harmony import */ var _clases_punto__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./clases/punto */ \"./src/clases/punto.js\");\n/* harmony import */ var _clases_herencia__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./clases/herencia */ \"./src/clases/herencia.js\");\nconsole.log(\"desde index\");\n\n\n\n\nvar people = [{\n  name: 'Jack',\n  age: 50\n}, {\n  name: 'Michael',\n  age: 9\n}, {\n  name: 'John',\n  age: 40\n}, {\n  name: 'Ann',\n  age: 19\n}, {\n  name: 'Elisabeth',\n  age: 16\n}];\n\nfunction teenager(person) {\n  return person.age > 10 && person.age < 20;\n}\n\nvar thereAreTeenagers = people.some(teenager);\nconsole.log(\"There are teenagers: \".concat(thereAreTeenagers));\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });