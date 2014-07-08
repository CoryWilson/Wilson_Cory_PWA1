/**********
Cory Wilson
WPA1
06/19/2014
Day 8 Notes
**********/

(function(){

  //object literal
  var stud = {name:"Scott",age:43,id:303039};

  //constructor object
  //capitalized function name implies constructor object
  /*function Student(n,a,i){
    this.name=n;
    this.age=a;
    this.id=i;
  }

  var stud1 = new Student("Scott",43,303039);
  //stud1.name="Scott";

  var stud2 = new Student("Cory",24,523423);
  //stud2.name="Cory";

  console.log(stud1);
  console.log(stud2);
  */

  //1000 students, 5 names, random age, random

  var students = [];
  var names = ["Joe","Liz","Steve","Bill","Kelly"];

  function Student(n){
    this.name=n;
    this.age=0;
    this.id=0;
  }

  for(var i=0;i<1000;i++){
    var s = new Student(names[~~(Math.random()*names.length)]);
    s.age = ~~(Math.random()*41+10);
    s.id = "AB"+~~(Math.random()*34489+10000);
    students.push(s);
  }

  displayStudents();

  function displayStudents(){
    for(var i=0;i<students.length;i++){
      console.log("student#"+(i+1));
      console.log(students[i].name);
      console.log(students[i].age);
      console.log(students[i].id);
    }

  }

})();
