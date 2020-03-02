// Clase padre
export class Forma {
    constructor() {
      console.log('Soy una forma geométrica.');
    }
  
    gritar() {
      console.log('YEP!!');
    }
  }
  
  // Clases hijas
  class Cuadrado extends Forma {
    constructor() {
      super();
      console.log('Soy un cuadrado.');
    }
  }
  
  class Circulo extends Forma {
    constructor() {
      super();    
      console.log('Soy un círculo.');
    }
  }
  
  class Triangulo extends Forma {
    constructor() {
      super();    
      console.log('Soy un triángulo.');
    }
  }

  let formas = new Forma();