/**************
Cory Wilson
PWA1
06/14/14
The Duel Part 3
**************/

(function(){
  //player objects
  //var player = {name, health, damage};
  var playerOne = {
    name:"Kabal",
    damage:20,
    health:100
  };
  var playerTwo = {
    name:"Kratos",
    damage:20,
    health:100
  };

  //player objects in an array
  var playerArray = [playerOne,playerTwo];

  var kabal = document.querySelector("#kabal");
  var kratos = document.querySelector("#kratos");
  var roundText = document.querySelector("#round");
  var scoresText = document.querySelector("#scores");

  //starting round for fight
  var round = 0;
  //button click
  var button  = document.querySelector(".buttonblue");
  button.addEventListener("click",onClick);

  /***********************************
              Functions!
  ***********************************/

  //function onClick
  function onClick(){
      round++;
      fight();
      //if(){
        //btnDone.removeEventListener("click",onClick);
      //}
  }

  //function that starts the fight
  function fight(){
    //alerts the user that the fight is beginning and whos' involved and their hp levels
      var minDamage1 = playerArray[0].damage * .5;
      var minDamage2 = playerArray[1].damage * .5;

      //random damage formulas for each player
      //Math.random()*(max-min)+min
      var damageFormOne = Math.floor(Math.random()*(playerArray[0].damage-minDamage1)+minDamage1);
      var damageFormTwo = Math.floor(Math.random()*(playerArray[1].damage-minDamage2)+minDamage2);

      //use damage formulas to place damage on characters
      // -= operator subrtracts damageForm from each player's health
      playerArray[0].health-=damageFormOne;
      playerArray[1].health-=damageFormTwo;

    inputHTML();
    winnerCheck();

  } //end of fight() function

  function inputHTML(){
      roundText.innerHTML = "Round "+round;
      kabal.innerHTML = playerArray[0].name+": "+playerArray[0].health;
      kratos.innerHTML = playerArray[1].name+": "+playerArray[1].health;
  }

  //function that checks for winner
  function winnerCheck(){
      //var champ keeps track of result if conditional is met
      //defaults to "Nobody Wins..." if players still have health
      //checks to see if both playerOne and playerTwo have no health
      //if they are both < 1 then they both lose
      if (playerArray[0].health<1 && playerArray[1].health<1){
          scoresText.innerHTML = "Good Job, now you're both dead!";
          button.removeEventListener("click",onClick);
      }
        //Check to see if playerTwo's health is < 1
        //if it is playerOne wins
        else if(playerArray[1].health<1){
          scoresText.innerHTML = playerArray[0].name+" is the Champion!";
          button.removeEventListener("click",onClick);
      }
        //Check to see if playerOne's health is < 1
        //if it is playerTwo wins
        else if(playerArray[0].health<1){
          scoresText.innerHTML = playerArray[1].name+" is the Champion!";
          button.removeEventListener("click",onClick);
      }
  } //end of winnerCheck() function

  //call fight function
  //fight();
})();
