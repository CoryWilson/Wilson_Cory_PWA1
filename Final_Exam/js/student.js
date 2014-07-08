/***********
Cory Wilson
PWA-1
Final
06/26/14
***********/

(function(){

  function Student(n,s,c,st,g){
    this.name=n;
    this.street=s;
    this.city=c;
    this.state=st;
    this.grades=g;
  }

  Student.prototype.getAverage = function(g){
    var total=0;
    for(var i=0;i<g.length;i++){
      total+=g[i];
    }
    return total/g.length;
  }

  Student.prototype.getDate = function(){
    var today = new Date();
    var month = today.getMonth()+1;
    var day = today.getDate();
    var year = today.getFullYear();
    return month+"/"+day+"/"+year;
  }

  window.Student = Student;
})();
