<script>

  var company = {
    name: "Neitek Solutions",
    address: "Torre Diamante 1007 Local 902",
    city: "Monterrey",
    telephone: "8113650243",
    business: "Computer Systems"
  };
  
  var school = {
    name: "Tecnologico de Ciudad Madero",
    carrers: ["Ing. Sistemas Computacionales", "Ing. Electrica","Ing. Electronica"]
  };
  
  var company = new Object();
    company.name =  "Neitek Solutions";
    company.address = "Torre Diamante 1007 Local 902";
    company.city = "Monterrey";
    company.telephone = "8113650243";
    company.business = "Computer Systems";
  
  
  var student = new Object();
    company.name = "Tecnologico de Ciudad Madero";
    company.carrers = ["Ing. Sistemas Computacionales", "Ing. Electrica","Ing. Electronica"];
  
  function company(valname,valadrress,valcity,valtel,valbusiness){
    this.name = valname;
    this.address = valadrress;
    this.city = valcity;
    this.telephone = valtel;
    this.business = valbusiness;
  }
  
  var company1 = new company("Neitek Solutions","Torre Diamante 1007 Local 902","Monterrey","8113650243","Computer Systems");
  
  var company2 = new company("Yoga&You","Prolongacion San Alberto 417 Local 2","Monterrey","8121392246","fitnessCenter");
    
  
  function Student(name,lastname,grade) {
    this.name = name;
    this.lastname = lastname;
    this.grade = grade;
    this.getName = function(){ return this.name + " " + this.lastname; }
    this.printGrade function(){ alert("El grado es: "+this.grade); }
  }
  
  function Person(name,lastname,age) {
    this.name = name;
    this.lastname = lastname;
    this.age = age;
    this.getName = function(){ return this.name; }
    get getAge(){ return this.age; }
    get: function(){ return this.lastname; }
    this.getNameC = function(){ return this.name + " " + this.lastname; }
    set setName(val){ this.name = val; }
    set: function(val){ this.lastname = val; }
    this.setAge(val){ this.age = val; }
    
  }
  Person.prototype.toString = function(){
     return this.name + " " + this.lastname + " " + this.age;
  }
  
  var Persona = function (nombre,apellidos,edad) {
    this._nombre = nombre;
    this._apellidos = apellidos;
    this._edad = edad;
  }

  Persona.prototype = {
    set nombre(val) { this._nombre = val; },
    set apellidos(val) { this._apellidos = val; },
    set edad(val) { this._edad = val; },
    get nombre() { return this._nombre; },
    get apellidos() { return this.apellidos; },
    get toString() { this.nombre + " " + this.apellidos + " " + this.edad;}
  }
  
  var persona1 = new Persona("Jorge","Gonzalez","32"); alert(persona1.toString());
    
 </script>