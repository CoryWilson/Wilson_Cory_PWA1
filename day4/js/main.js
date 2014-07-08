/**********
Cory Wilson
PWA1
06/10/14
Day 4
**********/
(function() {


  /***************************************************
        How to Access Stuff in the DOM

  //var name = "Bob";
  //var txt = document.querySelector("#greeting");
  //var txt = document.getElementById("greeting"); | Don't use this
  //txt.innerHTML = name;

  //txt.innerHTML = "what up?";
  //document.querySelector("#greeting").innerHTML = "Yo!";

  //document.querySelector("#btn").addEventListener("click",onClick);
  //"click", "mouseup", "mousedown"
  ***************************************************/
  /***************************************************
        The Long Way to do It!

  var grades = [80,90,100];
  var grade1TF = document.querySelector("#g1");
  var grade2TF = document.querySelector("#g2");
  var grade3TF = document.querySelector("#g3");
  var averageTxt = document.querySelector("#average");
  var average = 0;

  grade1TF.innerHTML = grades[0];
  grade2TF.innerHTML = grades[1];
  grade3TF.innerHTML = grades[2];

  document.querySelector("#btn").addEventListener("click",onClick);

  function onClick(){
      average = getAverage(grades);
      averageTxt.innerHTML = "The average grade is "+average+".";
  }

  function getAverage(g){
    var sum=0;
    for(var i=0; i<g.length; i++){
      sum += g[i];
    }
    return sum/g.length;
  }
  ***************************************************/
  /***************************************************
      The Shorter, More Difficult Way!
  var grades = [10,20,30,40,50];
  var tags = [];
  for(var i=0; i<grades.length; i++){
      tags[i] = document.querySelector("#g"+(i+1)).innerHTML=grades[i];
  }

  displayGrades();

  function displayGrades(){
    for(var j=0; j<grades.length; j++){
      tags[j].innerHTML = grades[j];
    }
  }
  ***************************************************/
  var input = document.querySelector("#input");
  var output = document.querySelector("h2");
  document.querySelector("#btn").addEventListener("click",onClick);

  function onClick(){
      //whatever you typed into the input field.
      output.innerHTML = "Hello "+input.value+"."; //value property
  }

})();
