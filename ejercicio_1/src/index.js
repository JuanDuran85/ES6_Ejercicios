import {saludo, saludo2} from './funciones/funciones';
import {setTimeout} from './tiempo/contadores';
import procesarEntradaUsuario from './funciones/funciones2';

const numero = 20;
var numero2 = 30;
let numero3 = 234;

console.log(numero2);

for (let numero2 = 0; numero2 < 10; numero2++) {
    console.log(numero2);
}

console.log(numero);
console.log(numero2);
console.log(numero3);

alert(`El numero 1 es: ${numero} como constante y el numero dos es: ${numero2}`);

saludo("a todos");
saludo2("señores y señoras");