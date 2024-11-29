function funcionPrincipal() {
    let a = 10;
    let b = 8;
    let resultado = ""; 

    
    function permuta() {
        resultado += "El valor de a es: " + a + "<br>";
        resultado += "El valor de b es: " + b + "<br>";
    
        let NumeroTemporal = a;
        a = b;
        b = NumeroTemporal;
    
        resultado += "El nuevo valor de a es: " + a + "<br>";
        resultado += "El nuevo valor de b es: " + b + "<br>";
    
    }
    permuta();
    
    document.getElementById("permuta").innerHTML = resultado;
}