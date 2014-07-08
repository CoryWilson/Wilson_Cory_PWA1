/**********
Cory Wilson
PWA1
JSON Notes
06/17/2014
**********/


(function(){

//loop through properties or enumerate

  //var line1 = document.querySelector("#line1");
  //var line2 = document.querySelector("#line2");
  //var line3 = document.querySelector("#line3");

  //line1.innerHTML = person.favorites.color;
  //line2.innerHTML = person.favorites.sport;
  //line3.innerHTML = person.favorites.food;

  //displayInterests();
  displayFavorites();

  var scott = {hair: "black", age: 29, nationality: "cuban"};
  //var prop = "hair";

  //console.log(scott.hair);
  //console.log(scott["hair"]);
  //console.log(scott[prop]);

  /************
    FUNCTIONS
  ************/

  function displayInterests(){
    for(var i=0; i<person.interests.length; i++){
      document.querySelector("#line"+(i+1)).innerHTML = person.interests[i];
    }
  }

  function displayFavorites(){
    //prop are properties
    //it'll return the actual property
    //properties will always be a string

    var i=1;
    for(var prop in person.favorites){
      document.querySelector("#line"+i).innerHTML = person.favorites[prop];
      //console.log(person.favorites[prop]);
      i++;
    }
  }

})();
