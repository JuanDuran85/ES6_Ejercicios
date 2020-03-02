export class Triangulo {
    constructor (base, altura){
        this.altura = altura;
        this.base = base;
    }

    area(){
        return (this.altura*this.base)/2;
    }
}

let areaTriangulo = new Triangulo(3,4);
console.log(areaTriangulo.area());