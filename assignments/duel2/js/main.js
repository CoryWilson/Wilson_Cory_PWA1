/**************
Cory Wilson
PWA1
06/07/14
The Duel Part 2
**************/

(function(){

  console.log("Round 1 Fight!");
  //var player = ["name", health, damage]
  var playerOne = ["Kabal",100,25];
  var playerTwo = ["Kratos",100,25];

  //starting round for fight
  var round = 0;

  //function that starts the fight
  function fight(){
    //alerts the user that the fight is beginning and whos' involved and their hp levels
    alert("Round "+(round+1)+", FIGHT! \n"+playerOne[0]+" has "+playerOne[1]+" HP remaining. \n"+playerTwo[0]+" has "+playerTwo[1]+" HP remaining.");
    //loop that will run the fight for a max of ten rounds
    for(var i=0; i<10; i++){

      var minDamage1 = playerOne[2] * .5;
      var minDamage2 = playerTwo[2] * .5;

      //random damage formulas for each player
      //Math.random()*(max-min)+min
      var damageFormOne = Math.floor(Math.random()*(playerOne[2]-minDamage1)+minDamage1);
      var damageFormTwo = Math.floor(Math.random()*(playerTwo[2]-minDamage2)+minDamage2);

      //use damage formulas to place damage on characters
      // -= operator subrtracts damageForm from each player's health
      playerOne[1]-=damageFormOne;
      playerTwo[1]-=damageFormTwo;

      console.log("Round "+(round+1)+" Over! \n"+playerOne[0]+" has "+playerOne[1]+" HP remaining. \n"+playerTwo[0]+" has "+playerTwo[1]+" HP remaining");

    //call the winnerCheck() function to see if the user wins
    var champ = winnerCheck();
    console.log(champ);
    //checks to see if nobody has one the fight yet...
    if(champ==="Nobody won this round..."){
      //if nobody won, then increments the round and moves on to next
      round++;
      alert("Round "+(round+1)+" Over! \n"+playerOne[0]+" has "+playerOne[1]+" HP remaining. \n"+playerOne[0]+" has "+playerTwo[1]+" HP remaining");
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
      if (playerOne[1]<1 && playerTwo[1]<1){
          champ = "Good Job, now you're both dead!";
      }
        //Check to see if playerTwo's health is < 1
        //if it is playerOne wins
        else if(playerTwo[1]<1){
          champ = playerOne[0]+" is the Champion!";
      }
        //Check to see if playerOne's health is < 1
        //if it is playerTwo wins
        else if(playerOne[1]<1){
          champ = playerTwo[0]+" is the Champion!";
      }
      return champ;
  } //end of winnerCheck() function

  //call fight function
  fight();
})();
