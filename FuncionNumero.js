function verificarNumero() {
    let numero = parseFloat(document.getElementById("numero").value);
    let resultado = document.getElementById("resultado");

    if (isNaN(numero)) {
        resultado.innerHTML = "Por favor, ingresa un número válido.";
    } else if (numero > 0) {
        resultado.innerHTML = "El número es positivo.";
    } else if (numero < 0) {
        resultado.innerHTML = "El número es negativo.";
    } else {
        resultado.innerHTML = "El número es nulo.";
    }
}