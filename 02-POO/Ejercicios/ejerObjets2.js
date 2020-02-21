
<script>

  var Persona = function () {
    this._nombre = "Juan";
    this._cantalk = true;
    this.greet = function(){ if(this._cantalk==true){ return "Hola"; }else{ return "Error"; }};
  };

  var Consumidor = function(){};
  
  var Mimo = function(){};
  
  var Empleado = function(){
    this._titulo = "";
    this.greet = function(){ if(this._titulo!=""){ return "Hola"; }else{ return "Error"; }}
  };
  
  Consumidor.prototype = new Persona();
  Consumidor.prototype.constructor = Consumidor;
  
  Empleado.prototype = new Persona();
  Empleado.prototype.constructor = Empleado;
  
  Mimo.prototype = new Persona();
  Mimo.prototype.constructor = Mimo;
  
 var p = new Persona(); var c = new Consumidor(); var e = new Empleado(); var m = new Mimo();
 
 m._cantalk = false; c._nombre= "Consuelo"; e._nombre = "Eduardo"; m._nombre = "Mime"; e._titulo = "Ingeniero";

</script>
