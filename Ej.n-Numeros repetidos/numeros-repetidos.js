// Edit your script here
var numeros = [4, 5, 2, 4, 5, 9, 9, 4, 4];
var num = 9, minrepet = 2; 

function contiene(arreglo,digito,repeticiones){
	var veces = 0;
    for(i=0;i<arreglo.length;i++){ //Recorrer el arreglo de numero 
    	if(arreglo[i]==digito){//comparar cada numero con la cantidad asignada
        	veces++; //aumentar a 1 la variable que almacena las apariciones del numero
        }
    }
    if(veces>=repeticiones){ //Comparar las veces que se repitio el numero con la cantidad minima de apariciones
    	return true; //Se alcanzo en numero de repeticiones minimas
    }else{
    	return false;//No se alcanzo la meta de repeticiones
    }
}

alert(contiene(numeros,num,minrepet));

</script>
<!-- edit your html here -->