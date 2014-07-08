/**********
Cory Wilson
PWA-1
Final
06/26/2014
**********/

(function(){ //self-executing anonymous function

	//creating variables so i don't have to use queryselector everytime i call displayHTML function
	var dom = {
		name:document.querySelector("#name"),
		address:document.querySelector("#address"),
		grades:document.querySelector("#grades"),
		date:document.querySelector("#date"),
		button:document.querySelector(".buttonred"),
		gpaAvg:document.querySelector("#gpaavg")
	}
	//variable for position within student array. used for button clicks
	var position = -1;
	//create an empty student array
	var studentArray = [];

	//student1 instance
	var student1 = new Student(
		"James Bond",
		"123 Test Dr",
		"Orlando",
		"Florida",
		[2.4,4.0,2.2]
	);
	//push into array
	studentArray.push(student1);
	//student2 instance
	var student2 = new Student(
		"Clint Dempsey",
		"456 Super Fake St",
		"Winter Park",
		"Florida",
		[3.7,2.3,3.3]
	);
	//push into array
	studentArray.push(student2);

	//call console log function
	logData();
	//add new student
	addStudent();
	//call console log function again
	logData();

	//creating click event on button
	dom.button.addEventListener("click",onClick);
/*****************
		FUNCTIONS!
*****************/

	//function that operates the button
	function onClick(){
		position++;
		displayHTML();
	}//close onClick function


	//function that adds new student
	function addStudent(){
		var newStudent = new Student(
			"Wayne Rooney",
			"789 Fake St",
			"Orlando",
			"Florida",
			[3.6,4.0,2.7]
		);
		studentArray.push(newStudent);
		console.log("New Student Added!!!")
	}


	//function that displays each student object's information onto the HTML page
	function displayHTML(){
		dom.name.innerHTML = "1. Name: "+studentArray[position].name;
		dom.address.innerHTML = "2. Address: "+studentArray[position].street+
		", "+studentArray[position].city+
		", "+studentArray[position].state;
		dom.grades.innerHTML = "3. Grades: "+studentArray[position].grades;
		dom.date.innerHTML = "4. Date: "+studentArray[position].getDate();
		dom.gpaAvg.innerHTML = "5. Average GPA: "+studentArray[position].getAverage(studentArray[position].grades).toFixed(2);
	}//close displayHTML function

	//function that console logs the student data
	function logData(){
		console.log("*********Student Data*********");
		for(var i=0; i<studentArray.length; i++){
			console.log("Name: "+studentArray[i].name);
			console.log("Address: "+studentArray[i].street+", "+studentArray[i].city+", "+studentArray[i].state);
			console.log("Grades: "+studentArray[i].grades);
			console.log("Date:"+studentArray[i].getDate());
			console.log("Average GPA: "+studentArray[i].getAverage(studentArray[i].grades).toFixed(2));
			console.log("------------------------------");
		}
	}//close logData function

})();//close self-executing anonymous function
