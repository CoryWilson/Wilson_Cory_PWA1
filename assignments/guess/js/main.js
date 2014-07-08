var outputText = document.querySelector("#output");
var btn = document.querySelector("button");

var ranInt = ~~(Math.random()*10+1);
console.log(ranInt);

var guessTotal = 0;

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
