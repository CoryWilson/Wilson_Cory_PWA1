/**********
Cory Wilson
PWA 1
06/21/2014
Objects
**********/

(function(){

  //store objects in seperate file

  //dog constructor object
  function Dog(n){
    this.name=n;
    this.breed="";
    this.age=0;
    this.food="";
  }

  //simply adds functions to objects
  //Dog.property.splice = function(){
    //console.log("I love Cory");
  //}

  Dog.prototype.bark = function(){
    console.log("Woof Woof Bitches!","My name is "+this.name+" and I like to eat "+this.food+".");
  }

  Dog.prototype.eat = function(){
    console.log("Stop bothering me. I am eating my "+this.food+".");
  }

  //make file visible on the global scope
  //makes sure to name it the same
  window.Dog = Dog;

})();
