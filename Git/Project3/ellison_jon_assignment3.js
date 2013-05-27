//alert("JavaScript works!");

//Jon Ellison
//SDI1305
//Project3
//23May13
//Objects

//This section is for my variables
var Bill
var Bob
var Bruce
var alldogs = [ "Bill", "Bob", "Bruce", ]

// This section is for the objects and properties that I will need to tell my story


//This boolean conditional is going to determine if the dogs actually go for a walk


		var dogwalk = (function (walk, didnotwalk) { // <--This line is my boolean argument for my flowchart
			// body...
			if (walk > didnotwalk){
				console.log( " The dogs named " + alldogs + " went for a walk. ");
				dogwalk = true;

			} else {
				console.log( " The dogs named " +alldogs + " they didn't go for walk. ");
				dogwalk = false;
		}
				return dogwalk; // This is the return boolean for my flowchart
	});

//Dog Info / Objects and Properties
		var dogInfo = {

			"dogs":[
				{"dogname": "bob", 
				 "numofspots": "2",
			},
				{"dogname": "Bill",
	 	 		 "numofspots":  "3",
			},
				{"dogname": "Bruce",
				 "numofspots": "4",
			},
		]
	};




// This section is for calling my functions, syntax and logging my story
dogwalk(1,0);

console.log(" The dog named " + dogInfo.dogs[0].dogname + " has " + dogInfo.dogs[0].numofspots + " spots ");

console.log(" The dog named " + dogInfo.dogs[1].dogname + " has " + dogInfo.dogs[1].numofspots + "spots");

console.log(" The dog named " + dogInfo.dogs[2].dogname + " has " + dogInfo.dogs[2].numofspots + "spots");



