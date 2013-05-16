//alert("JavaScript works!");

//Jon Ellison
//SDI1305
//Project2
//15May13
//Encapsulation and other functions

var myArray = ["Jenney", "Brian", "Andre", "Marcus"];
var numArray = [ 21, 25, 62, 34 ];

var myArrayFunction = function(newArray, numOfElements) {

	console.log("thenumber numOfElements is " + newArray.length);
	console.log("Our array is " + newArray);

	for ( var i=0; i < numOfElements; i++){
		
		console.log("Element " + i + " is " + newArray[i]);
		
	}
	newArray.pop();
	console.log("the new array is " +newArray);
}

myArrayFunction(myArray, myArray.length);




