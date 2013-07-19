//alert("JavaScript works!");

// Jon Ellison
// 18July13
// ellison_jon_assignment2
// SDI 1307

//my global variables and values
var girlName = "Sally"
var date = "Bill";
var goodHabits = true
var wantsTo = true
var drinksBeforeDate = 4


// my code starts here
// Procedure goes here

// Number Function goes here
var dateReady = function(currentAge){
		var yearsLeftToDate = 30 - currentAge;
		console.log("Sally is " + currentAge + " . ");
		while (30 > currentAge){
			   currentAge++;
			   return yearsLeftToDate;
			  };
			 
		};	

		var finallyReady = function(name, yearsLeftToDate){
		console.log(name + " better get busy since she only has " + yearsLeftToDate + " years left to date. ");
};

		var lookingForDate = dateReady(27);
		finallyReady("Sally", lookingForDate);



// Boolean Function goes here
var dateEligibility = function (goodHabits,wantsTo) {
	if(goodHabits === true && wantsTo === true){
			var desire = ("wants to go and is totally good to go.");
			return desire;
	} else {
			var desire = ("does not want to go.");
			return desire;
	};	
};
		
		var eligible = function (desire, habits){
		console.log("Bill totally "+ desire);
		};

		var checkHimOut = dateEligibility(true,true);
		eligible(checkHimOut);

// String Function goes here
var introduction = function (girlName,date) {
	var intro = (girlName + " & " + date);
	return intro;
};
		
	var wentwell = function (intro){
	console.log(intro + " we're introduced.");
};

	var timeToDate = introduction("Sally", "Bill");
	wentwell(timeToDate);


// Array Function goes here;

var dateInvite = function (billCalls,drinksBeforeDate) {
			var herDrinks = [" whiskey drink ", " lager drink ", " vodka drink ", " cider drink "];
			if (billCalls > 0) {
				console.log("Bill called looking for a date.")
				for (var i = 0; i < drinksBeforeDate; i++) {
				console.log("Sally had a " + herDrinks[i] + " to preGame. ");
				}; 
			} else {
				return;
				};
			return herDrinks;
};
		

var dateReady = function (name, date, herDrinks){
	console.log("Since " + name + " finished her " + herDrinks + " she is leaving with " + date + " . ");
};

	var goingOnDate = dateInvite(1,4);
	dateReady("Sally", "Bill", goingOnDate);

