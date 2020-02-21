<script>
// Edit your script here
var nums1 = [10,5,5];
var nums2 = [2,1,1,-1,3,4,10];
var nums3 = [-4,10,-6];
var nums4 = [1,2,3,4,1,1];

function SumasIguales(numeros) //Elimina las acentuaciones de la frase
{
	var sumapar=0, sumaimpar=0;
  
  for(i=0;i<numeros.length;i++){ //recorrer el arreglo de numeros
    if(numeros[i]%2==0) //revisar si el numero es par
      sumapar += numeros[i];
    if(numeros[i]%2==1) //revisar si el numero es impar
      sumaimpar += numeros[i];
  }

  if(sumapar==sumaimpar)  //comparar las sumatorias
    return true;
  else
    return false;
}


alert(Sumas Iguales(nums1)); //Mostrar el resultado

</script>
<!-- edit your html here -->