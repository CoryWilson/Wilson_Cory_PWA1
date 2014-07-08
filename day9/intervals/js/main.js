/********************
Cory Wilson
PWA1
06/21/2014
Day 9 Intervals Notes
********************/
(function(){

  //setInterval - apparently shitty
  //requestAnimationFrame - good for games apparently

  var clock = 0;
  var interval = setInterval(update, 1000/60);

  function update(){
    if(clock<100){
      console.log("tick tock",clock);
    } else {
      console.log("let's go home");
      clearInterval(interval);
    }
    clock++;
  }

})();
