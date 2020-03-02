
/* realizar un programa mediante clases que muestre la distancia entre dos puntos en el plano cartesiano ingresados en la creación de la instancia de la clase, utilizar el metodo static para calcular la distancia */

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
  //Los métodos estáticos se suelen utilizar para crear funciones de apoyo que realicen tareas concretas o genéricas, que queremos incluir en la clase porque están relacionadas con la clase en cuestión, es decir, que pueden ser invocados desde la clase sin necesidad de que se cree una instancia de la misma.
    static distancia () {
        alert("mensaje desde metodo estatico")
    }
  }
 
  console.log (`La distancia entre dos puntos es: ${Punto.distancia()}`); 

console.log('//--------Clase Animal---------//');

export class Animal {
  constructor(nombre_perro) {
    this.nombre2 = nombre_perro;
  }

  get nombre() {
    return `El perro es: ${this._nombre2}`;
  }

  set nombre(nombre_perro) {
    /*en lugar de hacer referencia al mismo nombre, se puede usar el patrón de prefijar cada variable local con un guión bajo, en comparación con el nombre público. */
    this._nombre2 = nombre_perro.trim();
  }

  quienSoy() {
    return `Hola, soy ${this.nombre2}`;
  }
}

// Creación de objetos
var perro = new Animal('Pastor Aleman');

console.log(perro.nombre2);
console.log(perro.quienSoy());
console.log(perro.nombre = '   Lucas  ');
console.log(perro.nombre);
console.log(perro.quienSoy());