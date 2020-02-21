// JavaScript source code
function numerosConsecutivos(min,max) {
    num1 = Math.round(Math.random() * (max - min) + min);
    num2 = Math.round(Math.random() * (max - min) + min);
    if (num1 == null || num2 == null) { num1 = 0; num2 = 0;}
    var a = new Array();
    for (i = num1; i <= num2; i++) {
        a.push(i);
    }
    return a;
}

var x = numerosConsecutivos(-20,20);

var texto = "";
for(i in x){
   texto += x[i] + ",";
}

alert("Los numeros son: " + texto);

var pares = "", impares = "";
for (i in x) {
    if ((x[i] % 2) == 1 || (x[i] % 2) == -1) {
        impares += x[i] + " ";
    } else {
        pares += x[i] + " ";
    }
}

alert("Los numeros pares son: " + pares);
alert("Los numeros impares son: " + impares);