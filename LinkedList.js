/* File LinkedList.js
 * Author The Almighty Arexu
 * Updated: ALWAYS
 */

//The LinkedList "Class" in javascript
function LinkedList(){
	//initializes the list
	this.head = null;
	this.tail = null;
	this.size = 0;
	
//-------------------------------Node-------------------------------------//
	
	//Creates a node with item thing
	function Node(thing){
		this.item = thing;
		this.next = null;
		this.prev = null;
	}
	
//-------------------------Linked List Stuff------------------------------//	
	
	//Pushes a node to the front of the list
	this.push = function(data){
		temp = new Node(data);
		if (!this.head){
			this.head = temp;
			this.tail = temp;
		}
		else{
			temp.next = this.head;
			this.head.prev = temp;
			this.head = temp;
		}
		this.size++;
	}
	
	//Pops off the first node of the list and returns it
	this.pop = function(){
		if (!this.head){return false;}
		data = this.head;
		this.head = this.head.next;
		if(this.head){this.head.prev = null;}
		else{this.tail = null;}
		this.size--;
		return data.item;
	}
	
	//Appends a node at the end of the list
	this.append = function(data){
		temp = new Node(data);
		if (!this.head){
			this.head = temp;
			this.tail = temp;
		}
		else{
			this.tail.next = temp;
			temp.prev = this.tail;
			this.tail = temp;
		}
		this.size++;
	}
	
	//Removes the node whose data matches the given element
	this.remove = function(target){
		if (!this.head){return false;}
		current = this.head;
		while (current){
			if (current.item == target){break;}
			current = current.next;
		}
		//Handle Special Cases
		if (!current){return false;}
		if (current == this.head){this.head = this.head.next;}
		if (current == this.tail){this.tail = this.tail.prev;}
		
		//Update pointers
		if(current.prev){current.prev.next = current.next;}
		if(current.next){current.next.prev = current.prev;}
		this.size--;
		return current.item;
	}
	
	//Removes the ith element of the list
	this.remove_index = function(){
		if (!this.head || this.size < i+1){return false;}
		current = this.head;
		var count = 0;
		while (count < i){ //go to the index
			current = current.next;
			count++;
		}
		//Handle Special Cases
		if (current == this.head){this.head = this.head.next;}
		if (current == this.tail){this.tail = this.tail.prev;}
		
		//Update pointers
		if(current.prev){current.prev.next = current.next;}
		if(current.next){current.next.prev = current.prev;}
		this.size--;
		return current.item;
	}
	
	//Returns the size of the list
	this.get_size = function(){return this.size;}
	
	//clears the entire list
	this.clear = function(){
		this.head = null;
		this.tail = null;
		this.size = 0;
	}
	
	//Applies the given function to every data value in the list
	this.map = function(func){
		if (!this.head){return;}
		current = this.head;
		while (current){
			current.item = func(current.item);
			current = current.next;
		}
	}
	
	//Determines whether or not all the elements are the same type
	this.is_compromised = function(){
		if (!this.head){return;}
		type = typeof this.head.item;
		current = this.head;
		while (current){
			if(!(typeof current.item == type)){return true;}
			current = current.next;
		}
		return false
	}
	
	//Prints out the contents of the list in a nice orderly fashion
	this.toString = function(){
		if (!this.head){console.log("Empty List\n\n");}
		else{
			current = this.head;
			string = "Head->";
			while (current){
				string += current.item + "->";
				current = current.next;
			}
			string += "End\n\n"
			console.log("List of Size: " +this.size);
			console.log(string);
		}
	}

}

//-------------------------Test Function Stuff---------------------------------//

//squares an int
function square(x){
	return x*x;
}

//Removes all vowels from the string
function mod_string(str){
	temp = '';
	vowels = ['a','e','i','o','u'];
	for(i=0; i<str.length; i++){
		letter = str.charAt(i);
		if (vowels.indexOf(letter)>-1){continue;}
		temp = temp+letter;
	}
	return temp;
}

//Test function for Numbers
function list_num(){
	//create a list
	var list = new LinkedList();
	console.log("After Initializing");
	list.toString();
	
	//Push Test
	list.push(2); list.push(4);
	console.log("After Pushing");
	list.toString();
	
	//Append Test
	list.append(5); list.append(89);
	console.log("After Appending");
	list.toString();
	
	//Remove Test
	list.remove(89); list.remove(4);
	console.log("After Removing 89 and 4");
	list.toString();
	
	//Pop Test
	console.log("Popped: "+list.pop());
	console.log("Popped: "+list.pop());
	list.toString();
	
	//Clear Test
	list.push(49); list.push(56);
	list.clear()
	console.log("After pushing 49 and 56 and then clearing");
	list.toString();
	
	//Test Map Method
	list.append(4); list.push(2); list.append(5);
	list.map(square);
	console.log("Added 2,4,5 and then applied a squaring function");
	list.toString();
	
	console.log("Checking Size: "+list.get_size());
}

//Test function for Strings
function list_string(){
	//create a list
	var list = new LinkedList();
	console.log("After Initializing");
	list.toString();
	
	//Push Test
	list.push("There"); list.push("Hello");
	console.log("After Pushing");
	list.toString();
	
	//Append Test
	list.append("Friend"); list.append("How are you?");
	console.log("After Appending");
	list.toString();
	
	//Remove Test
	list.remove("Hello"); list.remove("How are you?");
	console.log("After Removing 'Hello' and 'How are you?'");
	list.toString();
	
	//Pop Test
	console.log("Popped: "+list.pop());
	console.log("Popped: "+list.pop());
	list.toString();
	
	//Clear Test
	list.push("string1"); list.push("string2");
	list.clear()
	console.log("After pushing some strings and then clearing");
	list.toString();
	
	//Test Map Method
	list.append("This is going");
	list.append("to look very silly");
	list.append("when all the vowels are gone.");
	console.log("Created a new List:");
	list.toString();
	list.map(mod_string);
	console.log("Removed all vowels....HAHAHAHAHA");
	list.toString();
	
	console.log("Checking Size: "+list.get_size());
}

function list_safety(){
	console.log("Testing Compromise Check");
	var list = new LinkedList();
	list.append(2);
	list.push(1);
	console.log("Is the List Compromised? Should be false");
	console.log(list.is_compromised());
	list.push("a string");
	console.log("After Pushing a string it should be compromised");
	console.log(list.is_compromised());
}

function list_remove_test(){
	console.log("Testing the remove_index() method");
	var list = new LinkedList();
	var count = 9;
	while (count >= 0){
		list.push(count);
		count--;
	}
	console.log("After Initialization:");
	list.toString();
	list.remove_index(9);
	list.remove_index(0);
	list.remove_index(3);
}

//Main Method
//list_num();
//list_string();
list_safety();

