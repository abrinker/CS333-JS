/* File proj4.js
 * Author The Almighty Arexu
 * Updated: ALWAYS
 * Usage: This file is simply used to write a bunch of 
 * small coding snippets for JS in order to satisfy the demands
 * of our CS Professors
 */

//Integer and Float limitations
function intFloat(){
	var i = 2;
	var f = 2.00;
	var f2 = 5.0304
	var s = "2";
	
	//try out all the possible mathematical features
	console.log("Integer: %i Float: %i",i,f);
	console.log("Addition: %i %i %i", i+i, f+f, i+f);
	console.log("Subtraction: %i %i %i", i-i, f-f, i-f);
	console.log("Multiplication: %i %i %i", i*i, f*f, i*f);
	console.log("Division: %i %i %i", i/i, f/f, i/f);
	
	for (j=0.5; j<i; j++){
		console.log(j);
	}
}

//A short function to show operator precedence
function opPrec(){
	//Should print out correctly
	var a = "this should happen first"+", did it?";
	var b = 5;
	if ((b+11)/8*2+1 == 4/2+4-b+1+3 && a != ""){
		console.log("Whew....that was complex");
		if (3/3==1 || 3*3 == 99){
			console.log("Well, I can't believe that worked");
		}
	}
}

//A short function to show implicit conversion
function conversion(){
	console.log(1+1.0,1.0+1,1.02+1,1+1.02);
	console.log('1'+'1',1+'1','1'+1);
	console.log('5'-'2');
	
	//test 0
	if (0){console.log("0 is true");}
	else {console.log("0 is false");}
	//test false
	if (undefined){console.log("undefined is true");}
	else {console.log("'undefined' is false");}
}

//A short function to show the aggregate types
function aggTypes(){
	var array = ['la','dee','da'];
	var hash = {one: 1, two: 2, three: 3};
	console.log(array,'\n',hash);
	var func = conversion;
	func();
}

//Playing With functions in JS
function playingWithFunctions(func){
	a = func()
	console.log(5+a);
}

/* A very complex function, 
 * so complex I can't even explain it to you
 */
function returns_a_5(){
	return 5;
}

//A function that changes based on whether the machine is 32bit or 64bit
function bitThings(){
	/* JS is interesting because it tries to be type free, meaning it
	 * tries to never use types to define integers and floats, thus we
	 * have the lovely numbers class. This means that all of JS's
	 * numbers are stored in 64 bit but the wierd thing is that bitwise
	 * shifts are always in 32 bits and larger bit numbers that are shifted
	 * will be converted to 32 bits. This may cause some complications on
	 * different machines (although I didn't get to see the results for myself)
	 * depending on their specs. Of course, because JS has to be so versatile
	 * regarding different machine specs there could be a catch for this too.
	 * Regardless it is a possibility and it's cool.
	 */
	var num = 123456;
	var long_num = 1234567891011121314151617181920;
	console.log(num, long_num);
	num = num << 5;
	long_num = long_num << 13;
	console.log(num, long_num);
}

function floats_and_ints(){
	numbers = ['are','both','ints','and','floats'];
	numbers = "too simple";
}

//Main Stuff
//intFloat();
//opPrec();
//conversion();
//aggTypes();
//var blah = returns_a_5;
//playingWithFunctions(blah);
//bitThings();
floats_and_ints();