function funcionPrincipal() {
    let x = 10;
    let y = 8;
    let resultado = ""; 

    
    function permuta() {
        resultado += "El valor de a es: " + x + "<br>";
        resultado += "El valor de b es: " + y + "<br>";
    
        let NumeroTemporal = y;
        x = y;
        y = NumeroTemporal;
    
        resultado += "El nuevo valor de a es: " + x + "<br>";
        resultado += "El nuevo valor de b es: " + y + "<br>";
    
    }
    permuta();
    
    document.getElementById("permuta").innerHTML = resultado;
}