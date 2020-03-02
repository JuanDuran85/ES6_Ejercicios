// --------- otra manera para declarar las clases ------------- //

export let Persona2 = class {
	constructor(){
		this.nombre = "";
		this.edad = 33;
		this.nacionalidad = "Venezolano";
	}

	decirNombre(){
		console.log(`El nombre es Juan Duran`);
	}

	decirEdad(){
		console.log(`La edad es: ${this.edad}`);
	}

	decirNacionalidad(){
		console.log(`La nacionalidad es: ${this.nacionalidad}`);
	}
};

console.log('//----------Desde el segundo archivo Clases2------------//');
let clase2Perona2 = new Persona2();
clase2Perona2.decirNombre();
clase2Perona2.decirEdad();
clase2Perona2.decirNacionalidad();

// ------------ clases como parametros ------------- //

export function creadorClase (definicionClase) {
	return new definicionClase;
};

let objeto = creadorClase(class{
	constructor(){
		this.clase = "clase";
		this.parametro = "parametro";
	}

	saludar(){
		console.log(`Hola desde la ${this.clase} como ${this.parametro} de una función....`);
	}
});

objeto.saludar();

// ------------ clases como parametros 2------------- //
export class Cuadrado {
	constructor(lado){
		this.lado = lado;
	}

	obtenerArea(){
		return this.lado * this.lado;
	}
};

function imprimirCuadrado (cuadrado) {
	//El operador instanceof verifica si un objeto en su cadena de prototipos contiene la propiedad prototype de un constructor.
	if (!(typeof(cuadrado.obtenerArea()) == "number")) {
		console.error(`El parametro enviado no es un cuadrado`);
	}else{
		console.log(`El cuadro del número es: ${cuadrado.obtenerArea()}`);
	}
};

let cuadrado = new Cuadrado(5);
//let cuadrado = 1234; // si no se inicializa la clase, da error en la funcion
imprimirCuadrado(cuadrado);