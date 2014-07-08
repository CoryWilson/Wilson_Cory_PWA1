/*****************
  Cory Wilson
  PWA1
  Object: Person
  main.js
  06/22/14
*****************/

(function(){

  //dom object for all of items that need to be manipulated in the dom
  //keep people seperate and organized
  var dom = {
    person1:{
      name:document.querySelector("#r1c1"),
      job:document.querySelector("#r1c2"),
      action:document.querySelector("#r1c3")
    },
    person2:{
      name:document.querySelector("#r2c1"),
      job:document.querySelector("#r2c2"),
      action:document.querySelector("#r2c3")
    },
    person3:{
      name:document.querySelector("#r3c1"),
      job:document.querySelector("#r3c2"),
      action:document.querySelector("#r3c3")
    }
  };

  //names array
  var names = ["Tim", "Clint", "Jozy", "Michael", "Mix"];

  //array that stores person objects
  var people=[];

  //loop that creates 3 person objects
  for(var i=0;i<3;i++){
    var person = new Person(names[~~(Math.random()*names.length)],i+1);
    names.splice(names.indexOf(person.name),1);
    //person.job = (person.job[~~(Math.random()*person.job.length)]);
    //person.action = (person.action[~~(Math.random()*person.action.length)]);
    people.push(person);
    console.log(person);
  }

  //interval variable
  var interval = setInterval(runUpdate, 1000/30);

  //need to compare indexes and if they are equal then don't use it
  //indexOf();
  populateHTML();
  runUpdate();


  /************
    FUNCTIONS
  ************/

  function populateHTML(){
    //outputs person's name and person's job on the web page
    //must NOT allow duplicate names to appear
    dom.person1.name.innerHTML = people[0].name;
    dom.person1.job.innerHTML = people[0].job;

    dom.person2.name.innerHTML = people[1].name;
    dom.person2.job.innerHTML = people[1].job;

    dom.person3.name.innerHTML = people[2].name;
    dom.person3.job.innerHTML = people[2].job;
  }


  function runUpdate(){
    people.forEach(function(e){
      e.update();
    });

    dom.person1.action.innerHTML = people[0].action;
    dom.person2.action.innerHTML = people[1].action;
    dom.person3.action.innerHTML = people[2].action;
  }

})();
