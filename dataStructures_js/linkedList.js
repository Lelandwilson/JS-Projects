/*jshint esversion: 6 */
class linkedList {

	constructor(){
		this.head = null;
		this.tail = null;
	}

	append(value){
		const newNode = {value: value, next: null};

		if(this.tail){
			this.tail.next = newNode;
		}

		this.tail = newNode;

		if(!this.head){
			this.head = newNode;
		}
	}


	prepend(value){
		const newNode = {value: value, next: this.head};

		this.head = newNode;
		if(!this.tail){
			this.tail = newNode;
		}

	}

insertAfter(value, afterValue){
	const existingNode = this.find(afterValue);

	if(existingNode){
		const newNode = {value: value, next: existingNode.next};
		existingNode.next = newNode;
	}
}


	delete(value){
		//search through list for occurrence

		if(!this.head){ //ensure list is not empty
			return;
		}

		//check first node for value
		while(this.head && this.head.value === value){
			this.head = this.head.next;
		}

		//check rest of list for value
		let curNode = this.head;

		while (curNode.next){
			if(curNode.next.value === value){
				curNode.next = curNode.next.next;
				}
			else{
				curNode = curNode.next;
			}
		}

		if(this.tail.value === value){
			this.tail = curNode;
		}


	}

	find(value){
		if(!this.head){ //ensure list is not empty
			return null;
		}

		let curNode = this.head;
		while (curNode){
			if(curNode.value === value){
				return curNode;
			}
			
			curNode = curNode.next;
		}
		return null;

	}

	findValue(value){
		if(!this.head){ //ensure list is not empty
			return null;
		}

		let curNode = this.head;
		while (curNode){
			if(curNode.value === value){
				return curNode.value;
			}
			
			curNode = curNode.next;
		}
		return null;

	}

	findIndex(value){
		if(!this.head){ //ensure list is not empty
			return -1;
		}

		let index = 0;
		let curNode = this.head;
		while (curNode){
			if(curNode.value === value){
				return index;
			}
			index++;
			curNode = curNode.next;
		}
		return -1;

	}

	findByIndex(index){
		if(!this.head){ //ensure list is not empty
			return -1;
		}

		let curIndex = 0;
		let curNode = this.head;
		while (curNode){
			if(curIndex === index){
				return curNode.value;
			}
			curIndex++;
			curNode = curNode.next;
		}
		return -1;

	}


	toArray(){
		const elements = [];

		let curNode = this.head;
		while (curNode){
			elements.push(curNode.value);
			curNode = curNode.next;
		}
		return elements;
	}

	printList(){
		let curNode = this.head;
		while (curNode){
			console.log(curNode.value);
			curNode = curNode.next;
		}

	}

}

// const  newLinkedList = new linkedList();
// newLinkedList.append(3);
// newLinkedList.append(3);
// newLinkedList.append(3);
// newLinkedList.append(1);
// newLinkedList.append(2);
// newLinkedList.append(3);
// newLinkedList.append("Apple");
// newLinkedList.append(2*3);
// newLinkedList.prepend("First");
// newLinkedList.printList();
// newLinkedList.delete(3);
// newLinkedList.append(3);
// newLinkedList.insertAfter("This is a test", 2);
// // console.log(newLinkedList.toArray());
// newLinkedList.printList();




