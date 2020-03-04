boton.addEventListener("click", () => {
        let pais = document.getElementById("pais").value;
        console.log(pais);
        const url = `https://restcountries.eu/rest/v2/name/${pais}`;
        fetch(url)
            .then(respuesta => {
                return respuesta.json();
            })
            .then(json => {
                console.log(json[0].capital);
                mostrar.textContent = json[0].capital;
            })
            .catch(err => {
                console.error(err);
                console.log('Hubo un problema con la petición Fetch:' + err.message);
            });
});

// async - await

function resolveAfter7Seconds(x) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(x);
      }, 7000);
    });
};
  
async function add1(x) {
    const a = await resolveAfter7Seconds(20);
    const b = await resolveAfter7Seconds(30);
    return x + a + b;
}
  
add1(10).then(v => {
    console.log(v);  // prints 60 after 4 seconds.
});
  
async function add2(x) {
    const p_a = resolveAfter7Seconds(20);
    const p_b = resolveAfter7Seconds(30);
    return x + await p_a + await p_b;
};
  
add2(10).then(v => {
    console.log(v);  // prints 60 after 2 seconds.
});