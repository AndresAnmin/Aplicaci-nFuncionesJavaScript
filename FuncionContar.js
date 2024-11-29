function cuenta() {

    let limite = 50;
    let resultado = "";

    function cuentaPorValor() {
        for (let i = 0; i <= limite; i++) {
            resultado += `${i} `;
        }
    }

    cuentaPorValor();
    document.getElementById("cuenta").innerHTML = resultado;
}
