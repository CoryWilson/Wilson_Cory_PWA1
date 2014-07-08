/**********
Cory Wilson
PWA1
6/17/14
**********/
(function(){

  var outputText = document.querySelector("#output");
  var btn = document.querySelector("button");
  btn.addEventListener("click",onClick);


  function onClick(){
    runEmail();
  }

  function runEmail(){
    var inputText = document.querySelector("#input").value;
    console.log(inputText);
    var test = validateEmail(inputText);
    if(test===true){
      outputText.innerHTML = "Good Job!";
    } else{
      outputText.innerHTML = "Not a Valid Email, Try Again.";
    }
  }

  function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }


})();
