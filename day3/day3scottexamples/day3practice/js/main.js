(function (){


    console.log(coolDate());
    console.log(coolDate2());

    function coolDate(){
        var today = new Date();
        var month = today.getMonth()+1;
        var day = today.getDate();
        var year = today.getFullYear();
        return month+"/"+day+"/"+year;
    }

    function coolDate2(){
        var months = ["Jan","Feb","March","April","May","June","July"];
        var today = new Date();
        var month = today.getMonth();
        var day = today.getDate();
        var year = today.getFullYear();
        return months[month]+" "+day+","+year;
    }
})();