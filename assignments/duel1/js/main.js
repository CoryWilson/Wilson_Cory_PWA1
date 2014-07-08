/**************
Cory Wilson
PWA1
06/05/14
The Duel Part 1
**************/

(function(){

  console.log("Round 1 Fight!");

  //Player One Name
  var pOneName = "Kabal";
  //Player One Health
  var pOneHealth = 100;
  //Player One Damage
  var pOneDamage = 25;

  //Player Two Name
  var pTwoName = "Kratos";
  //Player Two Health
  var pTwoHealth = 100;
  //Player Two Damage
  var pTwoDamage = 25;

  //starting round for fight
  var round = 0;

  //function that starts the fight
  function fight(){
    //alerts the user that the fight is beginning and whos' involved and their hp levels
    alert("Round "+(round+1)+", FIGHT! \n"+pOneName+" has "+pOneHealth+" HP remaining. \n"+pTwoName+" has "+pTwoHealth+" HP remaining.");
    //loop that will run the fight for a max of ten rounds
    for(var i=0; i<10; i++){

      //random damage formulas for each player
      //Math.random()*(max-min)+min
      var damageFormOne = Math.floor(Math.random()*(pOneDamage-12.5)+12.5);
      var damageFormTwo = Math.floor(Math.random()*(pTwoDamage-12.5)+12.5);

      //use damage formulas to place damage on characters
      // -= operator subrtracts damageForm from each player's health
      pOneHealth-=damageFormOne;
      pTwoHealth-=damageFormTwo;

      console.log("Round "+(round+1)+" Over! \n"+pOneName+" has "+pOneHealth+" HP remaining. \n"+pTwoName+" has "+pTwoHealth+" HP remaining");

    //call the winnerCheck() function to see if the user wins
    var champ = winnerCheck();
    console.log(champ);
    //checks to see if nobody has one the fight yet...
    if(champ==="Nobody won this round..."){
      //if nobody won, then increments the round and moves on to next
      round++;
      alert("Round "+(round+1)+" Over! \n"+pOneName+" has "+pOneHealth+" HP remaining. \n"+pTwoName+" has "+pTwoHealth+" HP remaining");
    } else{
        //displays the winner once function executes
        alert(champ);
        //ends code  if no winner is determined following ten rounds
        break;
    }

    } //end of for loop

  } //end of fight() function

  //function that checks for winner
  function winnerCheck(){
      //var champ keeps track of result if conditional is met
      //defaults to "Nobody Wins..." if players still have health
      var champ = "Nobody won this round...";
      //checks to see if both playerOne and playerTwo have no health
      //if they are both < 1 then they both lose
      if (pOneHealth<1 && pTwoHealth<1){
          champ = "Good Job, now you're both dead!";
      }
        //Check to see if playerTwo's health is < 1
        //if it is playerOne wins
        else if(pTwoHealth<1){
          champ = pOneName+" is the Champion!";
      }
        //Check to see if playerOne's health is < 1
        //if it is playerTwo wins
        else if(pOneHealth<1){
          champ = pTwoName+" is the Champion!";
      }
      return champ;
  } //end of winnerCheck() function

  //call fight function
  fight();
})();
