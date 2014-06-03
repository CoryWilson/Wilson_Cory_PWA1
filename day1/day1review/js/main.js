/***********
Cory Wilson
PWA
Day 1 Review
06/03/14
***********/

//Invocation is calling a function

var grades = [40,80,100,110];

//array access notation
var g = grades[0];
//grades sub zero^ that's how you would say it

console.log(g);

//push() is a method of the array object
grades.push(95,98);

console.log(grades);

//pop()
//function has no parameters
grades.pop();
console.log(grades);

//splice() and indexOf()


//once given an array it will examine the array and return the lowest number in that array
var data = [3,5,7,4,9,2,5,7];

function lowestNum(arr){
  var lowNum = arr[0];
  for(var i=1;i<arr.length;i++){
    if(arr[i] < lowNum){
      var lowest = arr[i];
      console.log(lowest);
    }
  }

}

lowestNum(data);
