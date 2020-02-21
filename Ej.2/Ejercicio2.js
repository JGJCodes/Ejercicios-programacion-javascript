// JavaScript source code
var cilindro = {
    radio: 0,
    altura: 0,
    volumen: function () {
        var v = 3.1416 * (this.radio * this.radio) * this.altura;
        return v;
    }
}

function calcular() {
    var alt = document.getElementById("altura").value;
    var r = document.getElementById("radio").value;
    
    cilindro.altura = alt; cilindro.radio = r;
    v = 3.1416 * (cilindro.radio * cilindro.radio) * cilindro.altura;
    
   // alert("El volumen del cilindro es: " + cilindro.volumen);
    document.getElementById("resultados").innerText += "El volumen del cilindro es: " + v + "\n";
}


window.onload = function () {
    document.getElementById("altura").onchange = calcular();
    document.getElementById("radio").onchange = calcular();
    document.getElementById("calcular").onclick = calcular();
}
