// JavaScript source code
function verificarPalindromo() {
    var texto = prompt("Ingresa una cadena de texto");

    texto = texto.replace(" ", "");
    texto = texto.toLowerCase();
    var t = "";
    for (i = texto.length; i < 0 ; i--) {
        t = texto.charAt(i);
    }

    if (texto == t) {
        alert("El texto es un palindromo");
    } else {
        alert("El texto no es un palindromo");
    }

}

