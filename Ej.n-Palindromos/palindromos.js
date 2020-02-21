<script>
// Edit your script here
var palabra = "ana";

function ReemplazarAcentos(cadena) //Elimina las acentuaciones de la frase
{
	var chars={ //Arreglo de acentos
		"�":"a", "�":"e", "�":"i", "�":"o", "�":"u",
		"�":"a", "�":"e", "�":"i", "�":"o", "�":"u", "�":"n",
		"�":"A", "�":"E", "�":"I", "�":"O", "�":"U",
		"�":"A", "�":"E", "�":"I", "�":"O", "�":"U", "�":"N"}
	var expr=/[�����������]/ig;
	var res=cadena.replace(expr,function(e){return chars[e]});
	return res;
}

function EsPalindromo(frase){
    frase=frase.toLowerCase().replace(/\s/g,""); // Paso la frase a minusculas y quito espacios
    var reversa = frase.split("").reverse().toString(); // convierto la frase en un arreglo, lo invierto y convierto en string
    for (var i = 0; i < ((reversa.length)-1); i++) { //recorro el arreglo para eliminar las ","
        reversa=reversa.replace(",","");
      };
      //se reemplazan acentuaciones por letras normales en las frases
     frase = ReemplazarAcentos(frase); 
     reversa = ReemplazarAcentos(reversa);
     //alert("frase="+frase+" & reversa="+reversa);
      if(frase==reversa){// Comparo las dos frases.
        return true;// Si el resultado es positivo es una palindromo
      }
      else{
        return false;// Si el resultado es negativo no es un palindromo
      }
}

alert(EsPalindromo(palabra));

</script>
<!-- edit your html here -->