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

console.log('//--------Clase Animal---------//');

export class Animal {
  constructor(n) {
    this.nombre = n;
  }

  get nombre() {
    return `El perro es: ${this._nombre}`;
  }

  set nombre(n) {
    /*en lugar de hacer referencia al mismo nombre, se puede usar el patrón de prefijar cada variable local con un guión bajo, en comparación con el nombre público. */
    this._nombre = n.trim();
  }

  quienSoy() {
    return `Hola, soy ${this.nombre}`;
  }
}

// Creación de objetos
var perro = new Animal('Pastor Aleman');

console.log(perro.nombre);
console.log(perro.quienSoy());
console.log(perro.nombre= '   Lucas  ');
console.log(perro.nombre);
console.log(perro.quienSoy());