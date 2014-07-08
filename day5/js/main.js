/**************
Cory Wilson
WPA1
06/12/14
Object Literals
**************/

(function(){

  //object literal
  //var o = {quiz1: 40, proj: 50, prof: 60} //items inside of object, known as properties(keys)

  //Data Structures
  //Array Example
  //inside of arrays are known as elements
  var car = [35,"Toyota",15000,"Grey","RX330"];
  //Object Literal
  //inside of objects are known as properties and they have values
  var auto = {mpg:35,make:"Toyota",price:15000,color:"Grey",model:"RX330"};

  //Accessing the object literal or array
  console.log("Array",car[3]);
  console.log("Object Literal using dot syntax",auto.color);
  console.log("Object Literal using array access",auto["color"]);

  var russayDog = {
    name:"Shadow",
    breed:"German Shepherd",
    color:"Black"
  };

  var coryDog = {};
  coryDog.name = "Sadie";
  coryDog.breed = "Sheltie";
  coryDog.color = "Brown";

  var dog = {
    name:"",
    breed:"",
    color:"",
    age:0
  };

  dog.name = "Georgia";
  dog.breed = "Dachsund";
  dog.color = "Black";
  dog.age = 1;

  console.log(russayDog);
  console.log(coryDog);
  console.log(dog);

  var student = {
    name:"Cory Wilson",
    age:24,
    //street:"1709 Alvarado Court",
    //city:"Longwood",
    //state:"FL",
    address:{
      street:"1709 Alvarado Court",
      city: "Longwood",
      /*city:{
        mayor:"Cory",
        name:"Longwood",
        population:1000000
      },*/
      state:"FL"
      },
    grades:[100,98,90]
  };

  document.querySelector("#name").innerHTML = student.name;
  document.querySelector("#age").innerHTML = student.age;
  document.querySelector("#street").innerHTML = student.address.street;
  document.querySelector("#city").innerHTML = student.address.city;
  document.querySelector("#state").innerHTML = student.address.state;
  document.querySelector("#grades").innerHTML = student.grades;


  console.log(student);
  console.log(student.address.city.mayor);
  console.log(student.address);

})();
