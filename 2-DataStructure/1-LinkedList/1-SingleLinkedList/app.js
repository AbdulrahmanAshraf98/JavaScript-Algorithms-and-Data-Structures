class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

class LinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}
	push(value) {
		//create New Node Instance
		const newNode = new Node(value);
		//Check IF Linked List Empty
		if (!this.head) {
			//Add New Node for the head and the tail for first time And increases The Length by 1
			this.head = newNode;
			this.tail = newNode;
			this.length++;
			//return LinkedList ;
			return this;
		}
		//If not empty  steps
		//1-Move the Tail.Next pointer to New Node
		this.tail.next = newNode;
		//2-Than Move  the Tail pointer to New Node
		this.tail = newNode;
		//3- increases The Length by 1
		this.length++;
		return this;
	}
	traverse() {
		let currentNode = this.head;
		while (currentNode) {
			console.log(currentNode);
			currentNode = currentNode.next;
		}
	}
	pop() {
		let output = null;
		let currentNode = this.head;
		let newTail = currentNode;
		if (!this.head) {
			return output;
		}
		if (this.length === 1) {
			output = this.tail.value;
			this.head = null;
			this.tail = null;
			this.length--;
			return output;
		}
		while (currentNode.next) {
			newTail = currentNode;
			currentNode = currentNode.next;
		}
		output = this.tail.value;
		this.tail = newTail;
		this.tail.next = null;
		this.length--;
		return output;
	}
	shift() {
		const oldHead = this.head;
		if (!oldHead) return null;
		this.head = oldHead.next;
		this.length--;
		if (this.length === 0) {
			this.tail = null;
		}
		return oldHead;
	}
	unshift(value) {
		const newNode = new Node(value);
		let oldHead = this.head;
		if (!oldHead) {
			this.head = newNode;
			this.tail = newNode;
		}
		newNode.next = oldHead;
		this.head = newNode;
		this.length++;
	}
	get(index) {
		let counter = 0;
		if (index < 0 || index >= this.length) return null;
		let currentNode = this.head;
		while (counter !== index) {
			currentNode = currentNode.next;
			counter++;
		}
		return currentNode;
	}
	set(index, value) {
		const foundNode = this.get(index);
		if (!foundNode) return false;
		foundNode.value = value;
		return true;
	}
	insert(index, value) {
		if (index < 0 || index > this.length) return false;
		if (index === 0) {
			this.unshift(value);
			return true;
		}
		if (index === this.length) {
			this.push(value);
			return true;
		}
		let counter = 0;
		let currentNode = this.head;
		currentNode = this.get(index - 1);
		const newNode = new Node(value);
		newNode.next = currentNode.next;
		currentNode.next = newNode;
		this.length++;
		return true;
	}
	remove(index) {
		if (index < 0 || index > this.length) return false;
		if (index === 0) return this.shift();
		if (index === this.length - 1) return this.pop();
		let previousNode = this.get(index - 1);
		let removedNode = previousNode.next;
		previousNode.next = removedNode.next;
		this.length--;
		return removedNode;
	}

	reverse() {
		let currentNode = this.head;
		this.head = this.tail;
		this.tail = this.head;
		let next;
		let previous = null;
		for (let i = 0; i < this.length; i++) {
			next = currentNode.next;
			currentNode.next = previous;
			previous = currentNode;
			currentNode = next;
		}
		return this;
	}
}

const first = new LinkedList();
first.push("a");
first.push("b");
first.push("c");
// first.traverse();
// first.pop();
// first.traverse();
// console.log(first);
// first.unshift("z");
// first.unshift("y");
// console.log(first);
// first.shift();
// first.shift();
// first.push("w");
// console.log(first.get(2));
// console.log(first);
// console.log(first.set(0, "w"));
// console.log(first);
// console.log(first.insert(4, "qqqq"));
// console.log(first);
// console.log(first.remove(2));
console.log(first.reverse());
