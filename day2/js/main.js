/**********
Cory Wilson
PWA
Day 2
06/05/14
**********/

var lowest = getLowest(-4,32);

console.log(lowest);

var grades = [80,90,100];
getAverage(grades);
console.log(getAverage(grades));


//Array Methods
//Method relates to an object
//push and pop are methods of the array object
//Verbs...does something
push();
pop();

//length is a property
//Properties don't have ()
//Adjectives...describes them

//Members
//methods and properties
//push(), pop(), length, are members of array object

splice();
// var a = [4,6,7,9,10];
//to remove the 6
//a.splice(1,1);
//first argument is the index
//second argument is the amount of elements you want to remove

function getLowest(a,b){
  if(a<b){
    return a;
  } else {
    return b;
  }
}

function getAverage(g){
  var total = 0;
  for(var i=0; i<g.length; i++){
    total += g[i];
  }
  return total/g.length;
}
