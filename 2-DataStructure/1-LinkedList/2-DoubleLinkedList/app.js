class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
		this.previous = null;
	}
}
class DoubleLinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}
	push(value) {
		const newNode = new Node(value);
		if (!this.head) {
			this.head = newNode;
			this.tail = newNode;
			this.length++;
			return;
		}
		this.tail.next = newNode;
		newNode.previous = this.tail;
		this.tail = newNode;
		this.length++;
		return this;
	}
	pop() {
		if (!this.head) return null;
		const LastNode = this.tail;
		if (this.length === 1) {
			this.head = null;
			this.tail = null;
			this.length = 0;
			return LastNode;
		}
		const previousNode = LastNode.previous;
		previousNode.next = null;
		this.tail = previousNode;
		LastNode.previous = null;
		this.length--;
		return LastNode;
	}
	shift() {
		const currentNode = this.head;
		if (this.length === 0) return null;
		if (this.length === 1) {
			console.log(currentNode);
			this.head = null;
			this.tail = null;
			this.length = 0;
			return currentNode;
		}
		const nextNode = currentNode.next;
		nextNode.previous = null;
		currentNode.next = null;
		this.head = nextNode;
		this.length--;
		return currentNode;
	}
	unshift(value) {
		if (this.length === 0) {
			this.push(value);
			return;
		}
		const newNode = new Node(value);
		const currentNode = this.head;
		currentNode.previous = newNode;
		newNode.next = currentNode;
		this.head = newNode;
		this.length++;
		return this;
	}
	get(index) {
		if (index < 0 || index >= this.length) return null;
		let currentNode = this.head;
		const middleIndex = Math.ceil(this.length / 2);
		let counter = 0;
		//index Smaller Than MiddleElement or Equal
		if (index <= middleIndex) {
			while (counter !== index) {
				currentNode = currentNode.next;
				counter++;
			}
		}
		//index Greater Than MiddleElement
		if (index > middleIndex) {
			counter = this.length - 1;
			currentNode = this.tail;
			while (counter !== index) {
				currentNode = currentNode.previous;
				counter--;
			}
		}
		return currentNode;
	}
	set(index, value) {
		const fondedNode = this.get(index);
		if (!fondedNode) return false;
		fondedNode.value = value;
		return true;
	}
	insert(index, value) {
		if (index < 0 || index > this.length) return false;
		if (index === 0) return !!this.unshift(value);
		if (index === this.length) return !!this.push(value);
		const newNode = new Node(value);
		const fondedNode = this.get(index);
		const pervsNode = fondedNode.previous;
		newNode.previous = pervsNode;
		newNode.next = fondedNode;
		pervsNode.next = newNode;
		fondedNode.previous = newNode;
		this.length++;
		return true;
	}
	remove(index) {
		if (index < 0 || index >= this.length) return null;
		if (index === 0) return this.shift();
		if (index < this.length - 1) return this.pop();
		const removedNode = this.get(index);
		const previousNode = removedNode.previous;
		const nextNode = removedNode.next;
		nextNode.previous = previousNode;
		previousNode.next = nextNode;
		removedNode.next = null;
		removedNode.previous = null;
		this.length--;
		return removedNode;
	}
}

const doubleLinkedList = new DoubleLinkedList();
doubleLinkedList.push("a");
doubleLinkedList.push("b");
doubleLinkedList.push("c");
console.log(doubleLinkedList);
doubleLinkedList.pop();

console.log(doubleLinkedList);
console.log(doubleLinkedList.shift());
console.log(doubleLinkedList.shift());

doubleLinkedList.unshift("d");
doubleLinkedList.unshift("f");
doubleLinkedList.push("d");
doubleLinkedList.push("f");
doubleLinkedList.push("g");

console.log(doubleLinkedList.get(3));
console.log(doubleLinkedList.set(-3, "ssssssss"));
console.log(doubleLinkedList.insert(3, "ssssssss"));
console.log(doubleLinkedList.remove(3));
console.log(doubleLinkedList);
