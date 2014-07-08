/**********
Cory Wilson
PWA 1
06/21/2014
Objects
**********/

(function(){

  Car.make = ["Toyota","Ford","GMC","Subaru","Honda","Buick"];

  function Car(){
    this.make=Car.make[~~(Math.random)*Car.make.length];
    this.color="";
    this.rate=(~~(Math.random()*100));
  }

  Car.prototype.accelerate = function(){
      console.log("I am a "+this.make+" and the car accelerates at "+this.rate);
  }

  window.Car = Car;
})();
