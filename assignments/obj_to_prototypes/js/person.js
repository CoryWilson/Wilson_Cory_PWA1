/*****************
  Cory Wilson
  PWA1
  Object: Person
  person.js
  06/22/14
*****************/

(function(){
   Person.actionsArray = ["Working","Eating","Sleeping"];
   Person.job=["Web Developer", "Web Designer", "UX Designer", "Software Developer"];


  //person constructor object
  function Person(n,r){
    this.name=n;
    this.job=Person.job[~~(Math.random()*Person.job.length)];
    this.action=Person.actionsArray[~~(Math.random()*Person.actionsArray.length)];
    this.row=r;
  }

  Person.prototype.update = function(){
    if(Math.random()<.01){
          this.action=Person.actionsArray[~~(Math.random()*Person.actionsArray.length)];
    }
  }

  window.Person=Person;
})();

//splice
