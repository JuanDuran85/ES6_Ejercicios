export class Nombres {
    constructor(nombre1,nombre2){
        this.nombre1 = nombre1;
        this.nombre2 = nombre2;
    }

    mostrarNombre1(){
        return this.nombre1;
    }

    mostrarNombre2(){
        return this.nombre2;
    }
}

let nombreUsuario1 = new Nombres("Juan","Maria");
let nombreUsuario2 = new Nombres("Paola","Simon");

console.log(nombreUsuario1.mostrarNombre1());
console.log(nombreUsuario1.mostrarNombre2());
console.log(nombreUsuario2.mostrarNombre1());
console.log(nombreUsuario2.mostrarNombre2());