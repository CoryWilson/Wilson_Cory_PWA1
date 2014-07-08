/************************************
						Cory Wilson
						PWA-1
						Final
						06/14/2014
************************************/

(function(){ //self-executing anonymous function

	//student object 1
	var student1 = {
		name:"Cory Wilson",
		address:{
			street:"123 Fake St",
			city:"Orlando",
			state:"FL"
		},
		grades:[3.4,3.9,3.5],
	};

	//student object 2
	var student2 = {
		name:"Jimmy John",
		address:{
			street:"456 Super Fake St",
			city:"Winter Park",
			state:"FL"
		},
		grades:[3.7,2.3,3.3],
	};

	//variable for position within student array. used for button clicks
	var position = -1;

	//create studentArray to hosue student objects
	var studentArray = [student1,student2];

	//call console log function
	logData();

	//use addData function to add student to student array
	addData(
		"Wayne Rooney",
		"120 World Cup Way",
		"Lake Mary",
		"FL",
		[2.3,3.2,2.8]
	);

	//console log for creation of a new student
	console.log("New Student Added!");

	//creating variables so i don't have to use queryselector everytime i call displayHTML function
	var name = document.querySelector("#name");
	var address = document.querySelector("#address");
	var grades = document.querySelector("#grades");
	var date = document.querySelector("#date");

	//var btnDone created for same reason as above variables
	var btnDone = document.querySelector(".buttonred");

	//creating click event on button
	document.querySelector(".buttonred").addEventListener("click",onClick);

	//calling console log function
	logData();
/*****************
		FUNCTIONS!
*****************/

	//function that gets the date and formats it
	function getDate(){
		var today = new Date();
		var month = today.getMonth()+1;
		var day = today.getDate();
		var year = today.getFullYear();
		return month+"/"+day+"/"+year;
	}//close getDate

	//function that allows you to add to the student data
	function addData(n,s,c,st,g){
		//create new student object
		var stu = {};
		stu.name = n;
		stu.address = {
			street:s,
			city:c,
			state:st
		};
		stu.grades = g;
		//pushing new student object into student array
		studentArray.push(stu);
	}//close addData

	//function that operates the button
	function onClick(){
		position++;
		if(position===studentArray.length){
			//removes click event
			btnDone.removeEventListener("click",onClick);
			//changes button text to done
			btnDone.innerHTML = "DONE!!!";
		}
		displayHTML();
	}//close onClick function


	//function that displays each student object's information onto the HTML page
	function displayHTML(){
		name.innerHTML = "1. Name: "+studentArray[position].name;
		address.innerHTML = "2. Address: "+studentArray[position].address.street+
		", "+studentArray[position].address.city+
		", "+studentArray[position].address.state;
		grades.innerHTML = "3. Grades: "+studentArray[position].grades;

		date.innerHTML = "4. Date: "+getDate();

		var avg = getAverage(studentArray[position].grades);
		document.querySelector("#gpaavg").innerHTML = "5. Average GPA: "+avg.toFixed(2);
	}//close displayHTML function

	//function that console logs the student data
	function logData(){
		console.log("*********Student Data*********");
		for(var i=0; i<studentArray.length; i++){
			console.log("Name: "+studentArray[i].name);
			console.log("Address: "+studentArray[i].address.street+", "+studentArray[i].address.city+", "+studentArray[i].address.state);
			console.log("Grades: "+studentArray[i].grades);
			console.log("Date:"+getDate());
			var avg = getAverage(studentArray[i].grades);
			console.log("Average GPA: "+avg.toFixed(2));
			console.log("------------------------------");
		}
	}//close logData function

	function getAverage(g){
		var sum=0;
		for(var i=0; i<g.length; i++){
			sum += g[i];
		}
		return sum/g.length;
	}//close getAverage function

})();//close self-executing anonymous function
