//Trabajando con clases en ES6

//Realizar un ejemplo que cree una clase con los datos básicos de un usuario (nombre, apellido, rut, edad), y muestre la inforamción mediante un método denominado mostrarInfo(). Los parametros se deben pasar por la instancia de la clase.

export class Usuario {
    constructor (nombre, apellido, edad, rut) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.rut = rut;
    }

    mostrarInfo(){
        return console.log(`El nombre es: ${this.nombre}, el apellido es: ${this.apellido}, el Rut es: ${this.rut} y la edad es: ${this.edad}`);
    }
}

let persona = new Usuario("Maria","Perez",35,232343);
persona.mostrarInfo();

import {Triangulo} from './triangulo';