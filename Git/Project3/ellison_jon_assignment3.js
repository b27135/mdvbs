//alert("JavaScript works!");

//Jon Ellison
//SDI1305
//Project3
//23May13
//Objects

var playerInfo = {

	"players":[
		{"playerFirstName": "Lee", 
		 "playerLastName": "Lewis"
	},
		{"playerFirstName": "Jon",
	 	 "playerLastName":  "Ellison"

		}
	]
};


var cube = {

	"name": "Rubik",
	"length": 5,
	"width": 5,
	"height": 5,
	"isSquare": true,
	"area": function(){ // Method: accessor - Method: Getter

		var totalArea = this.height * this.width * this.length;
		return totalArea;
	},
	"setHeight": function(newHeight){

		this.height - newHeight;

	}

}; // end cube object

console.log("The total area is " +cube.area());

cube.setHeight(10);

console.log("The new area is " +cube.area());

console.log("The player is " + playerInfo.players[0].playerFirstName);


//global variables
var Bill
var Bob
var Bruce
var alldogs = [ "Bill", "Bob", "Bruce", ]
var numofSpots = [1,2]
var walkedIntoBuilding = true
var wenttofloor1 = 1
var wenttofloor2 = 1

	var dogwalk = (function (walk, didnotwalk) {
		// body...
		if (walk > didnotwalk){
			console.log( "" + alldogs + " went for a walk. ");
			dogwalk = true;

		} else {
			console.log( "" +alldogs + " they didn't go for walk. ");
			dogwalk = false;
	}
			return dogwalk;
});

dogwalk(1,0);

