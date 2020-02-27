export const funcion1 = function (valor) {
    let resultado = [];
    valor.forEach(element => {
        if (typeof(element)=="number") {
            resultado.push(element*4);
        };
    });

    resultado = resultado.filter(function (elementos) {
        if (elementos > 8) {
            return elementos;
        }
   });

   console.log(resultado);
};