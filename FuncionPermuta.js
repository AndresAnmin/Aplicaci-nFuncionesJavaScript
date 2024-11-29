function funcionPrincipal() {
    let a = 10;
    let b = 5;
    let resultado = ""; 

    
    function permuta() {
        resultado += "El valor inicial de a es: " + a + "<br>";
        resultado += "El valor inicial de b es: " + b + "<br>";
    
        let NumeroTemporal = a;
        a = b;
        b = NumeroTemporal;
    
        resultado += "El nuevo valor de a es: " + a + "<br>";
        resultado += "El nuevo valor de b es: " + b + "<br>";
    
    }
    permuta();
    
    document.getElementById("permuta").innerHTML = resultado;
}