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
	
	//Prints out the contents of the list in a nice orderly fashion
	this.toString = function(){
		if (!this.head){console.log("\nEmpty List");}
		else{
			current = this.head;
			string = "Head->";
			while (current){
				string += current.item + "->";
				current = current.next;
			}
			string += "End"
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

//Adds "blah" to a string
function add_blah(str){
	return str+"blah";
}

//Test function for Numbers
function list_nums(){
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
	
	list.push(49); list.push(56);
	list.clear()
	console.log("After pushing a bit more and clearing");
	list.toString();
	
	list.append(4); list.push(2); list.append(5);
	list.map(square);
	list.toString();
}

//Test function for Strings
function list_strings(){
}

//Main Method
list_nums();
list_strings();

