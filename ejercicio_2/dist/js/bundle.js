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

/***/ "./src/clases/clases1.js":
/*!*******************************!*\
  !*** ./src/clases/clases1.js ***!
  \*******************************/
/*! exports provided: Rectangulo, Persona, Auto */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Rectangulo\", function() { return Rectangulo; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Persona\", function() { return Persona; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Auto\", function() { return Auto; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n//Declarando una clase en ES6:\nvar Rectangulo = /*#__PURE__*/function () {\n  //se reciben los parámetros mediante el constructor \n  function Rectangulo(alto, ancho) {\n    _classCallCheck(this, Rectangulo);\n\n    //utilizamos el this para referirse a la clase\n    //se asignan los valores mediante los parámetros ingresados\n    //propiedades\n    this.alto = alto;\n    this.ancho = ancho;\n  } //metodos\n\n\n  _createClass(Rectangulo, [{\n    key: \"areaRec\",\n    value: function areaRec() {\n      return this.alto * this.ancho;\n    }\n  }]);\n\n  return Rectangulo;\n}(); // instancia\n\nconsole.log(\"// ----------- clases en JS6 ----------- //\");\nvar areaRectangulo = new Rectangulo(2, 1);\nconsole.log(\"EL area del Rectangulo es: \".concat(areaRectangulo.areaRec()));\nvar Persona = /*#__PURE__*/function () {\n  function Persona(nombre) {\n    _classCallCheck(this, Persona);\n\n    this.nombre = nombre;\n  }\n\n  _createClass(Persona, [{\n    key: \"decirNombre\",\n    value: function decirNombre() {\n      // esto es igual que Perona.prototype.decirNombre() en ES5.\n      console.log(\"El nombre de la persona es: \".concat(this.nombre));\n    }\n  }]);\n\n  return Persona;\n}();\n;\nvar clase1Perona = new Persona(\"Juan Duran\");\nclase1Perona.decirNombre();\nvar Auto = /*#__PURE__*/function () {\n  function Carro(modelo, color, fecha, kilometros, marca) {\n    _classCallCheck(this, Carro);\n\n    this.modelo = modelo, this.color = color, this.fecha = fecha, this.kilometros = kilometros, this.marca = marca;\n  }\n\n  _createClass(Carro, [{\n    key: \"mostrar\",\n    value: function mostrar() {\n      return \"El Color es: \".concat(this.color, \". La marca es: \").concat(this.marca);\n    }\n  }, {\n    key: \"mostrar2\",\n    value: function mostrar2() {\n      return \"Los kilometros son: \".concat(this.kilometros, \".\");\n    }\n  }]);\n\n  return Carro;\n}();\nvar comprar = new Auto(\"Corola\", \"Rojo\", \"\", \"12243\", \"Toyota\");\nconsole.log(\"\".concat(comprar.mostrar()));\nconsole.log(\"\".concat(comprar.mostrar2()));\n\n//# sourceURL=webpack:///./src/clases/clases1.js?");

/***/ }),

/***/ "./src/clases/clases2.js":
/*!*******************************!*\
  !*** ./src/clases/clases2.js ***!
  \*******************************/
/*! exports provided: Persona2, creadorClase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Persona2\", function() { return Persona2; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"creadorClase\", function() { return creadorClase; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n// --------- otra manera para declarar las clases ------------- //\nvar Persona2 = /*#__PURE__*/function () {\n  function Persona2() {\n    _classCallCheck(this, Persona2);\n\n    this.nombre = \"\";\n    this.edad = 33;\n    this.nacionalidad = \"Venezolano\";\n  }\n\n  _createClass(Persona2, [{\n    key: \"decirNombre\",\n    value: function decirNombre() {\n      console.log(\"El nombre es Juan Duran\");\n    }\n  }, {\n    key: \"decirEdad\",\n    value: function decirEdad() {\n      console.log(\"La edad es: \".concat(this.edad));\n    }\n  }, {\n    key: \"decirNacionalidad\",\n    value: function decirNacionalidad() {\n      console.log(\"La nacionalidad es: \".concat(this.nacionalidad));\n    }\n  }]);\n\n  return Persona2;\n}();\nconsole.log('//----------Desde el segundo archivo Clases2------------//');\nvar clase2Perona2 = new Persona2();\nclase2Perona2.decirNombre();\nclase2Perona2.decirEdad();\nclase2Perona2.decirNacionalidad(); // ------------ clases como parametros ------------- //\n\nfunction creadorClase(definicionClase) {\n  return new definicionClase();\n}\n;\nvar objeto = creadorClase( /*#__PURE__*/function () {\n  function _class() {\n    _classCallCheck(this, _class);\n\n    this.clase = \"clase\";\n    this.parametro = \"parametro\";\n  }\n\n  _createClass(_class, [{\n    key: \"saludar\",\n    value: function saludar() {\n      console.log(\"Hola desde la \".concat(this.clase, \" como \").concat(this.parametro, \" de una funci\\xF3n....\"));\n    }\n  }]);\n\n  return _class;\n}());\nobjeto.saludar();\n\n//# sourceURL=webpack:///./src/clases/clases2.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _clases_clases1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clases/clases1 */ \"./src/clases/clases1.js\");\n/* harmony import */ var _clases_clases2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clases/clases2 */ \"./src/clases/clases2.js\");\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });