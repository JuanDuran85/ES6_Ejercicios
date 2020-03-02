console.log("desde index");

import {Nombres} from './clases/nombres';
import {Usuario} from './clases/usuario';
import {Punto, Animal} from './clases/punto';
import {Forma} from './clases/herencia';

const people= [  
    {name: 'Jack', age: 50},  
    {name: 'Michael', age: 9},  
    {name: 'John', age: 40},  
    {name: 'Ann', age: 19},  
    {name: 'Elisabeth', age: 16}
]

function teenager(person) {
    return person.age > 10 && person.age<20
}
let thereAreTeenagers=people.some(teenager);
console.log(`There are teenagers: ${thereAreTeenagers}`)