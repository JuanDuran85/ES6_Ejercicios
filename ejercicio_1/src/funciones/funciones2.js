function saludar(nombre) {
    alert('Hola ' + nombre);
  }

  function procesarEntradaUsuario(callback) {
    var nombre = prompt('Por favor ingresa tu nombre.');
    callback(nombre);
  }
  
  export default procesarEntradaUsuario(saludar);