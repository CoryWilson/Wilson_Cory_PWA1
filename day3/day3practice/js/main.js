/*************
Cory Wilson
PWA1
06/07/14
Day 3 Practice
*************/

//Math.random() -> 0<=n<1

//Math.floor(Math.random()*6+5);
//the multiplier - how many numbers you want to find the random for
//add by the number you want to start at

(function(){

  /*
  for(var i=0; i<100; i++){
    //var dice = Math.floor(Math.random()*11+2);
    var dice = ~~(Math.random()*11+2);
    console.log(dice);
  }
  */

//Array
//Math
//Date

  console.log(getDate());
  console.log(coolDate());

  function getDate(){
    var today = new Date();
    var month = today.getMonth()+1;
    var day = today.getDate();
    var year = today.getFullYear();
    return month+"/"+day+"/"+year;
  }

  function coolDate(){
    var months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    var today = new Date();
    var month = today.getMonth();
    var day = today.getDate();
    var year = today.getFullYear();
    return months[month]+". "+day+","+year;
  }

})();
