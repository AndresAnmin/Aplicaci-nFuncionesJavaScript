function verificarNumero() {
    let numero = parseFloat(document.getElementById("numero").value);
    let resultado = document.getElementById("resultado");

    if (isNaN(numero)) {
        resultado.innerHTML = "Por favor, ingresa un numero valido.";
    } else if (numero > 0) {
        resultado.innerHTML = "El numero es positivo.";
    } else if (numero < 0) {
        resultado.innerHTML = "El numero es negativo.";
    } else {
        resultado.innerHTML = "El nnmero es nulo.";
    }
}