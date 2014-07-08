/**********
Cory Wilson
PWA1
06/21/2014
Day 9 Notes
**********/
(function(){

//object literal {}
//constructor object new Dog()

//object - a collection of properties and methods

/******************
//Dog Object
//Properties of Dog
  -breed
  -age
  -name
//Methods of Dog
  -bark()
  -sleep()
  -eat()
  -play()

******************/

  //array of dogs
  var kennel = [];
  var names = ["Fido","Max","Shadow","Zeus","Sadie","Teddie"];
  var breeds = ["German Shepherd","Golden Retriever","Shetland Sheepdog","Schnouzer","Beagle","Australian Shepherd"];
  var food = ["Beans","Ham","Oranges","Pizza","Beer","Mt. Dew","Cats"];



  //capital name and keyword new are giveaways that it is a constructor object
  var coryDog = new Dog("Sadie");
  coryDog.food = food[~~(Math.random()*names.length)];
  coryDog.bark();
  coryDog.eat();
  kennel.push(coryDog);

  //create new dog
  //don't waste time with this
  //var dog = new Dog();
  //var dog1 = new Dog();
  //var dog2 = new Dog();

  //create 100 new dogs
  for (var i=0;i<100;i++){
    var d = new Dog(names[~~(Math.random()*names.length)]);
    d.breed = breeds[~~(Math.random()*names.length)];
    d.food = food[~~(Math.random()*names.length)];
    d.age = ~~(Math.random()*15+1);
    d.bark();
    d.eat();
    kennel.push(d);
  }

})();
