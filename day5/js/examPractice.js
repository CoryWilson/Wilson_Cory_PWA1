console.log("loaded exam practice");

(function(){

  var student1 = {
    name:"Joe Smith",
    address:{
      street:"123 Fake Street",
      city:"Orlando",
      state:"FL"
    },
    grades:[80,90,100]
  };

  var student2 = {
    name:"Shelly Something",
    address:{
      street:"456 Fake Street",
      city:"Orlando",
      state:"FL"
    },
    grades:[40,50,60]
  };

  var student3 = {
    name:"Ricky Bobby",
    address:{
      street:"789 Fake Street",
      city:"Orlando",
      state:"FL"
    },
    grades:[90,95,100]
  };

  var classRoom = [student1, student2, student3];
  var currentStudent = 0; //Represents which student should be displayed in html

  var name = document.querySelector("#name");
  var street = document.querySelector("#street");
  var city = document.querySelector("#city");
  var state = document.querySelector("#state");
  var grades = document.querySelector("#grades");

  document.querySelector("button").addEventListener("click",onClick);
  //console.log(classRoom[0].grades[2]);
  logData();
  addStudent("Russay","100 Summerwind Ct.", "Winter Park", "FL", [80,90,95]);
  console.log("New Student Added!!!");
  logData();
  displayHTML();

  /*****************
      Functions!
  *****************/

  function addStudent(n,s,c,st,g){
    var std = {};
    std.name = n;
    std.address = {street:s,city:c,state:st};
    std.grades = g;
    classRoom.push(std);
  }

  function onClick(){
    currentStudent++;
    if(currentStudent===classRoom.length){
      currentStudent=0;
    }
    displayHTML();
  }

  function displayHTML(){
    name.innerHTML = "Name: "+classRoom[currentStudent].name;
    street.innerHTML = "Street: "+classRoom[currentStudent].address.street;
    city.innerHTML = "City: "+classRoom[currentStudent].address.city;
    state.innerHTML = "State: "+classRoom[currentStudent].address.state;
    grades.innerHTML = "Grades: "+classRoom[currentStudent].grades;

    var avg = getAverage(classRoom[currentStudent].grades);
    document.querySelector("#average").innerHTML = "Average: "+avg;
  }

  function logData(){
    console.log("*********Student Data*********");
    for(var i=0; i<classRoom.length; i++){
      console.log("Name: "+classRoom[i].name);
      console.log("Address: "+classRoom[i].address.street+", "+classRoom[i].address.city+", "+classRoom[i].address.state+".");
      //console.log("Grades: "+classRoom[i].grades);
      for(var j=0;j<classRoom[i].grades.length;j++){
        console.log("Grade "+(j+1)+": "+classRoom[i].grades[j]);
      }
      console.log("------------------------------");
    }
  }

  function getAverage(g){
    var sum=0;
    for(var i=0; i<g.length; i++){
      sum += g[i];
    }
    return sum/g.length;
  }

})();
