/* File testy.js
 * Author The Almighty Arexu
 * Updated: ALWAYS
 */

var variable = 0; //Tried a Global Variable
document.write("Hello, World! I'm writing from inside another file!");

function helloWorld(){
	alert("Hello World!\nAlex is pretty awesome.");
}

/*
 * Shows off some of the basic scoping of javascript
 */
function scopeStuff(){
	console.log("P1: "+variable);
	var variable = 2;
	console.log("P2: "+variable);
	
	if(true){
		var variable = 1;
		console.log("P3: "+variable);
	}
	console.log("P4: "+variable);
	
}

/*
 * Binary Search assuming a sorted array
 */
function binarySearch(item, array, first=0, last=null) {

	if (last) {}
	else {var last = array.length -1;}
	var current;
		
	while (first <= last){
		current = parseInt((first + last)/2);
		if (first == last && item != array[current])
			return null;
		else if (item == array[current]){
			return item;
		}
		else if (item > array[current]){
			return binarySearch(item, array, current+1, last);
		}
		else {
			return binarySearch(item, array, first, current-1);
		}
	}
}

/*
 * Shows off some of the data type of JS
 */
function dataTypes(){
	//String
	var myString = "Alex";
	
	//Number
	var alexCoolness = 2;
	var alexCoolness2 = 2.2;
	var alexCoolness3 = 999e5;
	
	//Boolean
	var isAlexCool = true;
	
	//Array
	var array = [1,'a',2.4];
	
	//Object e.g. hashes
	var hash = {firstName: "Alex", lastName:"Goku", number: 16, random: true}
	
	document.writeln("<p>String: "+myString+"</p>")
	document.writeln("<p>Coolness Numbers: "+alexCoolness+" "+alexCoolness2+" "+
					 alexCoolness3+"</p>")
	document.writeln("<p>Boolean: "+isAlexCool+"</p>")
	document.writeln("<p>Array: "+array+"</p>")
	document.writeln("<p>Hash: "+hash["firstName"]+hash["number"]+"</p>")
}

/*
 * Shows off some data structure manipulation using operators
 */
 function dataManipulation(){
 	//concatenation
 	var strA = "a";
 	var strB = "bear";
 	console.log(strA+strB);
 	console.log(strB*3);
 	
 	//addition
 	var numA = 11;
 	var numB = 14;
 	console.log(numA+numB);
 	console.log(12%5);
 
 	//Comparisons
 	console.log(strA === strB); //should be false
 	console.log(!(strA === strB)); //should be !false
 	
 	//Arrays
 	var array = ["stuff"];
 	array + "hi";
 	console.log(array);
 }
 
 function aHaiku(){
 	var Hai = "Deep, Cool, Statement";
 	console.log(Hai);
 }


//Main Statement
dataTypes();
scopeStuff();
someArray = [0,1,2,3,4,5,6,7,8,9,10];

//Do some binary Search stuff
console.log(binarySearch(4,someArray));
console.log(binarySearch(4,someArray,5));
console.log(binarySearch(4,someArray,1,6));

//Data manipulation time
dataManipulation();

//It's time to chill out with a Haiku
aHaiku();
