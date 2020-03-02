// ------ metodos estaticos y computados de las clases ------- //

export let nombreMetodo = "gritarNombre";

console.log('//-----------Desde clase 3-----------------//')

class Persona3 {
	constructor(nombre){
		this.nombre = nombre;
	}

	decirNombre(){
		console.log(`El nombre es: ${this.nombre}`);
	}

	[nombreMetodo](){
		console.log(`El nombre en mayúsculas es: ${this.nombre.toUpperCase()}`);
	}

	//metodo estatico
	static crear(nombre){
		return new Persona3(nombre);
	}
};

let alumnos = Persona3.crear("Alumnos G1");
console.log('/-----Llamado a alumnos');
console.log(alumnos);
console.log('/-----Llamado a alumnos.gritarNombre');
alumnos.gritarNombre();
console.log('/-----Llamado a alumnos.decirNombre');
console.log(alumnos.decirNombre());

console.log('//-----------Clase Punto-----------------//');

export class Punto {
  constructor ( x , y ){
    this.x = x;
    this.y = y;
  }

  mostrarX(){
  	console.log(this.x);
  }

  mostrarY(){
  	console.log(this.y);
  }

  static distancia ( a , b) {
    const dx = a.x - b.x;
    const dy = a.y - b.y;

    return Math.sqrt ( dx * dx + dy * dy );
  }
}

const p1 = new Punto(3, 6);
const p2 = new Punto(1, -13);
p1.mostrarX();
p1.mostrarY();
p2.mostrarX();
p2.mostrarY();

console.log (`La distancia entre dos puntos es: ${Punto.distancia(p1, p2)}`); 