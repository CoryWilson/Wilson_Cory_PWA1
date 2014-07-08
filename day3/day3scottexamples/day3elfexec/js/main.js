/**
 * Created by someoneelse on 6/7/14.
 */
console.log("loaded");

(function (){
    var grades = [30,40,50];
    var test = [3,4,5];
    var average = getAverage(test);
    var avg = getAverage(grades);
    console.log("You average grade is",average);
    console.log("You average grade is",avg);

    function getAverage(numbs){
        var total=0;
        for (var i=0;i<numbs.length;i++){
            total+=numbs[i];
        };
        return total/numbs.length;
    }
})();



