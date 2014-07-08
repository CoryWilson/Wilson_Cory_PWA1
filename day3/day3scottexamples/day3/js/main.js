/**
 * Created by someoneelse on 6/7/14.
 */
console.log("created");
//Scope Exercise
//inner function access outer functions variable

function outer(){
    var outer=7;

    function inner(){
        var inner=2;
        var test = outer+2; //works because outer exist outside
    }
    console.log(inner);  //undefined because inner variable defined in inner function
}