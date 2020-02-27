
const llamado = setTimeout(mensaje,7000);

function mensaje () {  
    console.log("llamado desde archivo de contadores");
}

export {llamado};