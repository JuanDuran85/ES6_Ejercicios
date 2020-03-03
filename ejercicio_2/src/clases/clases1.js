//Declarando una clase en ES6:
export class Rectangulo{
//se reciben los parámetros mediante el constructor 
  constructor(alto, ancho) {
//utilizamos el this para referirse a la clase
//se asignan los valores mediante los parámetros ingresados
//propiedades
    this.alto = alto;
    this.ancho = ancho;
  }
//metodos
  areaRec(){
  return this.alto*this.ancho;
  }
}
// instancia
console.log("// ----------- clases en JS6 ----------- //");
let areaRectangulo = new Rectangulo(2,1);
console.log(`EL area del Rectangulo es: ${areaRectangulo.areaRec()}`);

export class Persona {
	constructor (nombre){
		this.nombre = nombre;
	}

	decirNombre(){   // esto es igual que Perona.prototype.decirNombre() en ES5.
		console.log(`El nombre de la persona es: ${this.nombre}`);
	}
};

let clase1Perona = new Persona("Juan Duran");
clase1Perona.decirNombre();


export const Auto = class Carro {
  constructor (modelo, color, fecha, kilometros, marca) {
    this.modelo = modelo,
    this.color = color,
    this.fecha = fecha,
    this.kilometros = kilometros,
    this.marca = marca
  }
 
  mostrar(){
    return (`El Color es: ${this.color}. La marca es: ${this.marca}`);
  }
 
  mostrar2(){
    return (`Los kilometros son: ${this.kilometros}.`);
  }
}

let comprar = new Auto("Corola","Rojo","","12243","Toyota");
console.log(`${comprar.mostrar()}`);
console.log(`${comprar.mostrar2()}`);
