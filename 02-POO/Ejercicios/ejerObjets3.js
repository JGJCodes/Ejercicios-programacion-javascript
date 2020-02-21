<script>

  class Animal{
      Constructor(name){
	this.name = name;
      }
    toString(){
      return this.name;
    }
  }
  
  class Canine{
    Constructor(name,dom){
      Super(name);
      this.domestic = dom
    }
    toString(){
      return this.name + this.domestic;
    }
  }
  
  class Dog(){
    Constructor(name,dom,owner){
      Super(name,dom);
      this.owner = owner;
    }
    toString(){
      return this.name + this.domestic + this.owner;
    }
  }
  
  class Fox(){
    Constructor(name,dom,color){
      Super(name,dom);
      this.color = color;
    }
    toString(){
      return this.name + this.domestic + this.color;
    }
  }

</script>