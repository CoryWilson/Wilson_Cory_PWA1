/**********
Cory Wilson
PWA1
06/07/14
Day 3
**********/

//indexOf()
//locates the index number of an item within an array

var score=0;
addToScore(20);
addToScore(5);
console.log(score);

function addToScore(amount){
  score+=amount;
}

//SCOPE - variable visibility
//By default ALL variables are GLOBAL
//naming collisions...especially with libraries


function outer(){
  var outer=10;

  function inside(){
    var inner=5;
    console.log(outer);
  }

  console.log(inner);
}
