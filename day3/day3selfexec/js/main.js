/*****************************
Cory Wilson
PWA1
06/07/14
Day 3 Self-Executing Functions
*****************************/
/*
init();

function init(){
  var grades = [80,90,100];
  console.log(grades);
}
*/

//Self-Executing Anonymous Function
//do this for scope, so there is are no global variables
//everything is encapsulated now

console.log("loaded");

(function(){
  var grades = [80,90,100];
  var avg = getAverage(grades);
  console.log("running",grades);
  console.log(avg);

  function getAverage(nums){
    var total=0;
    for(var i=0; i<nums.length; i++){
      total+=nums[i];
    }
    return total/nums.length;
  }

})();
