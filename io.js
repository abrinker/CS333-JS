/* File LinkedList.js
 * Author The Almighty Arexu
 * Updated: ALWAYS
 */
 
function helloWorld(){
	alert("Hello World!\nAlex is pretty awesome.");
}

function getNames(){
	var input = document.getElementById("testForm2");
	if (input == null){return;}
	for (i=0; i < input.length; i++){
		if(input[i].type=="text"){console.log(input[i].value);}
	}
}