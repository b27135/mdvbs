//alert("JavaScript works!");

//Jon Ellison
//SDI1305
//Project2
//15May13
//Encapsulation and other functions



// variables
var bill = "Bill";
var healthcareapp = "Health Care App";
var otherdevelopers = ["Mike", "Steven", "Andrew", "John"];
var numberofbillsprojects = 7;
var otherdeveloperprojects = 7;


//procedure
if (numberofbillsprojects < otherdeveloperprojects - 1){ 
	// this is what will run if bill has no projects remaining before the other devs.
	console.log(" If  " + bill + " has no projects remaining before " + otherdevelopers + " \n then he gets to work on the " + healthcareapp + " . ");}
	else {
	//this is what will run if the other devs beat bill
	console.log(" If the " + otherdevelopers + " finish with their projects \nbefore " + bill + " completes his, then he will lose his job. " );}


//Boolean Function
		if (numberofbillsprojects < otherdeveloperprojects === true){
			// this is what will run if bill has fewer projects than the other devs
			console.log("As long as it is true that   " + bill + " has fewer projects open during the month than " + otherdevelopers + " then he should win." );}

			else {
				//this is what will run if the other devs have fewer projects than bill
				console.log(" If the " + otherdevelopers + " complete more projects each week \nthen " + bill + " will be behind. ");

			}

//Number Function
			while(numberofbillsprojects > 0){
				//this is what will run until bill runs out of projects
				console.log("As long as " + bill + " has projects he will do them 2 at a time. This week he has " + numberofbillsprojects);
				numberofbillsprojects = numberofbillsprojects - 2;

			}
			//this will run once bill runs out of projects
			console.log("until " + bill + " has no more projects. ");

//Array Function
var countDown = Function(otherdeveloperprojects)
	//this is what will run to determine how quickly the other devs finish their projects
	for (var i=otherdeveloperprojects; i >= 0; i--);
		//this is what will run once they are done
		console.log(otherdevelopers+ " Worked feverishly at their projects until they were all done. ")


countDown

//string function
var say = function(winner) { console.log(winner); };
			//this is what will win when bill wins.
			say("Too bad fellas, Bill is the winner!");

