/**********
Cory Wilson
PWA1
06/09/2014
Debug It!
**********/

// Create privatized scope using a self-executing function
(function(){

	// Variable initialization (DO NOT FIX ANY OF THE BELOW VAR's)
	var resultsDIV = document.getElementById("results"),
		searchInput = document.forms[0].search,
		currentSearch = ''
	;

/****************
Validate Function
****************/

	// Validates search query
	var validate = function(query){ //fix errors: typo in validate, assignment operator from == to =

		// Trim whitespace from start and end of search query
		while(query.charAt(0) === " "){ //fix error: equals should be strictly equals
			query = query.substring(1, query.length);
		}//end while
		while(query.charAt(query.length-1) === ""){
			query = query.substring(0, query.length-1);
		}//end while

		// Check search length, must have 3 characters
		if(query.length < 3){
			alert("Your search query is too small, try again.");//fix error: close string

			// (DO NOT FIX THE LINE DIRECTLY BELOW)
			searchInput.focus();
			return;
		}//end if | fix error: unnecessary semicolon

		search(query);
	};//end function

/**************
Search Function
**************/

	// Finds search matches
	var search = function(query){ //fix error: curly braces for search function

		// split the user's search query string into an array
		var queryArray = query.split(" ");//fix error: .join is wrong should be .split

		// array to store matched results from database.js
		var results = [];

		// loop through each index of db array
		for(var i=0, j=db.length; i<j; i++){

			// each db[i] is a single video item, each title ends with a pipe "|"
			// save a lowercase variable of the video title
			var dbTitleEnd = db[i].indexOf('|');
			var dbItem = db[i].toLowerCase().substring(0, dbTitleEnd);//fix error: camel casing dbitem to dbItem, tolowercase() should be toLowerCase()

			// loop through the user's search query words
			// save a lowercase variable of the search keyword
			for(var ii=0, jj=queryArray.length; ii<jj; ii++){

				var qItem = queryArray[ii].toLowerCase();//fix error: camel casing dbitem to qItem, tolowercase() should be toLowerCase()

				// is the keyword anywhere in the video title?
				// If a match is found, push full db[i] into results array

				var compare = dbItem.indexOf(qItem); //fix error: camel casing dbitem to dbItem, qitem to qItem

				if(compare != -1){ //fix error: !== should be !=
					results.push(db[i]);
				}//end if | fix error: unnecessary ;
			}//end for | fix error: ; should be }
		}//end for | fix error: ; should be }

		results.sort();

		// Check that matches were found, and run output functions
		if(results.length === 0){ //fix error: = should be ===
			noMatch();
		}else{
			showMatches(results);
		}//end if | fix error: unnecessary ;
	};//end function

/****************
No Match Function
****************/

	// Put "No Results" message into page (DO NOT FIX THE HTML VAR NOR THE innerHTML)
	var noMatch = function(){
		var html = ''+
			'<p>No Results found.</p>'+
			'<p style="font-size:10px;">Try searching for "JavaScript".  Just an idea.</p>'
		;
		resultsDIV.innerHTML = html;
	}; //end function

/********************
Show Matches Function
********************/

	// Put matches into page as paragraphs with anchors
	var showMatches = function(results){

		// THE NEXT 4 LINES ARE CORRECT.
		var html = '<p>Results</p>',
			title,
			url
		;

		// loop through all the results search() function
		for(var i=0, j=results.length; i<j; i++){

			// title of video ends with pipe
			// pull the title's string using index numbers
			titleEnd = results[i].indexOf('|');
			title = results[i].substring(0, titleEnd);

			// pull the video url after the title
			url = results[i].substring(results[i].indexOf('|')+1, results[i].length);

			// make the video link - THE NEXT LINE IS CORRECT.
			html += '<p><a href=' + url + '>' + title + '</a></p>';
		}//end for | fix error: unnecessary ;
		resultsDIV.innerHTML = html; //THIS LINE IS CORRECT.
	};//end function

/**************
Submit Function
**************/

	// The onsubmit event will be reviewed in upcoming Course Material.
	// THE LINE DIRECTLY BELOW IS CORRECT
	document.forms[0].onsubmit = function(){
		var query = searchInput.value;
		//fix error: validate var typo
		validate(query);

        // return false is needed for most events - this will be reviewed in upcoming course material
        // THE LINE DIRECTLY BELOW IS CORRECT
		return false;
	};//end function | fix error: ; should be };

})();//end self-executing function
