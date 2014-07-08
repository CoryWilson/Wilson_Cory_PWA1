/*************
 Cory Wilson
 PWA1
 06/16/2014
 Guessing Game
 ************/

//Game variables
(function (){

    var magicNumber = ~~(Math.random()*10+1);
    var guessNum = 0;
    var dom = {
      input:document.querySelector("#input"),
      output:document.querySelector("#output"),
      button:document.querySelector("button")
    };

    console.log(magicNumber);

    dom.button.addEventListener("click",onClick);

    /*********************
          FUNCTIONS
    *********************/

    function onClick(){
      //validate to see if what you typed is a number
      //see if it is between 1-10
      //if it isn't don't have to run the program
      if(isNaN(dom.input.value) || (dom.input.value<1 || dom.input.value>10)){
        dom.output.innerHTML = "Please follow directions!";
      } else{
        checkWinner();
      }
    }

    function checkWinner(){
      guessNum++;
      if(dom.input.value>magicNumber){
        dom.output.innerHTML = "You guessed to high. You have "+(3-guessNum)+" remaining.";
      } else if(dom.input.value<magicNumber){
        dom.output.innerHTML = "You guessed to low. You have "+(3-guessNum)+" remaining.";
      } else{
        dom.output.innerHTML = "You guessed correctly";
      }
    }



  /**************************************

        My Personal Version

  //id's and button from html page
  var outputText = document.querySelector("#output");
  var btn = document.querySelector("button");

  //random integer between 1-10
  //var ranInt = Math.floor((Math.random()*(10)+1));
  var ranInt = ~~(Math.random()*10+1);
  console.log(ranInt);

  var guessTotal = 0;

  //create an addEventListener to the button
  btn.addEventListener("click", onClick);

  function onClick(){
    //validate input
    checkGuess();
    guessTotal++;
  }

  function checkRound(){
    if(guessTotal === 3){
      outputText.innerHTML = "You've used up all of your guesses. GAME OVER.";
      btn.removeEventListener("click", onClick);
    }
  }

  function checkGuess(){
    var inputText = document.querySelector("#input").value;
    console.log(inputText);
    if(inputText < ranInt){
      outputText.innerHTML = "Your guess of "+inputText+" is too low, try again. Guesses Remaining: "+(3-guessTotal);
    } else if(inputText > ranInt) {
      outputText.innerHTML = "Your guess of "+inputText+" is too high, try again. Guesses Remaining: "+(3-guessTotal);
    } else {
      outputText.innerHTML = "You guessed the number "+ranInt+" correctly!";
    }
    checkRound();
  }

  ****************************************/

})();
