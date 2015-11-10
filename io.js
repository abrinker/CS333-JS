/* File LinkedList.js
 * Author The Almighty Arexu
 * Updated: ALWAYS
 */
 
//runs when a button is pushed
function helloWorld(){
	alert("Hello World!\nAlex is pretty awesome.");
}

//Retrieves the data from the form input method
function getNames(){
	var input = document.getElementById("testForm2");
	if (input == null){return;}
	for (i=0; i < input.length; i++){
		if(input[i].type=="text"){console.log(input[i].value);}
	}
}

//Handle inputting files via the browse button
function handleFileBrowse(evt){
	var files = evt.target.files;
	
	var output = [];
	for (var i=0, f; f = files[i]; i++){
		//build the HTML list output
		output.push('<li><strong>', escape(f.name), '</strong> (', f.type || 'n/a', ') - ',
		f.size, ' bytes, last modified: ',
		f.lastModifiedDate ? f.lastModifiedDate.toLocaleDateString() : 'n/a', '</li>');
	};
	document.getElementById('list').innerHTML = '<ul>' + output.join('') + '</ul>';
}

//Handle inputting files via drag 'n' drop
function handleFileDrop(evt){
	evt.stopPropagation();//stop this event from being handled multiple times at once
	evt.preventDefault();//prevents other handlers from running (makes this on the main)
	var files = evt.dataTransfer.files; //retrieve the FileList object
	
	var output = [];
	for (var i=0, f; f = files[i]; i++){
		output.push('<li><strong>', escape(f.name), '</strong> (', f.type || 'n/a', ') - ',
		f.size, ' bytes, last modified: ',
		f.lastModifiedDate ? f.lastModifiedDate.toLocaleDateString() : 'n/a', '</li>');
	};
	document.getElementById('list2').innerHTML = '<ul>' + output.join('') + '</ul>';
}

//code for handling a file drop
function handleDragOver(evt){
	evt.stopPropagation();
	evt.preventDefault();
	evt.dataTransfer.dropEffect = 'copy'; 
	//This basically makes the dropped file a copy of the original
}

//Actually reads the data in the files rather than metadata
function readFile(evt){
	var files = evt.target.files;//Retrieve the files
	if (!files.length){//If there is no file
		alert("NO FILE SELECTED! NOOOOOOOOOOO!\n(select a file next time)");
		return;
	}
	
	var file = files[0];//get the first of the selected files
	var reader = new FileReader();//Initializes the file reading object
	
	//This function is called when the reader finishes loading
	reader.onloadend = function(evt){
		if (evt.target.readyState == FileReader.DONE){
			//simply prints the entire read file to the webpage.
			document.getElementById('read_out').textContent = evt.target.result;
		}
	};
	
	reader.readAsBinaryString(file);//read the entire file
}

//--------------------Function Stuff-----------------------------//

function foo(a, b,options){
	c = a + b
	for (o in options){console.log(options[o]);}
}

function foo2(a,b,c){
	var thing = a;
	if (typeof b != "undefined"){thing += b;}
	if (typeof c != "undefined"){thing += c;}
	return thing;
}

function test(){
	console.log('Function Stuff\nFirst Style:\n');
	console.log('Two Arguments');
	foo(1,2,{op1:'Option A', op2:'Option B'});
	console.log('\nOne Argument');
	foo(1,2,{op1:"Only Option A"});

	console.log('\nSecond Style\nThree Arguments');
	console.log(foo2(1,2,3));
	console.log('\nOne Argument');
	console.log(foo2(1));
}

function test2(){
	console.log('Testing Function Constructor');
	var param_strings = 'name, age, location';
	var func_strings = 
			'console.log("Hello, "+name+", you are "+age+" years '+
						  'old and you live in "+location+"!");';
	var func = new Function(param_strings,func_strings);
	func('Alex','20','PeWi');
}

function test3(){
	console.log("Testing Function Override");
	A = function(){console.log('This is Function A');}
	B = function(){console.log('This is Function B');}
	A = B
	A();
	A = function(){console.log('This is Function C');}
	A();
}

//A Haiku
function s_in_JS(){
	cannot = ["be","overloaded"];
	unless = "using hash"
}


//Main Method:



