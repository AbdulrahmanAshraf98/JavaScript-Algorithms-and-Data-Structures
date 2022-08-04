class Node {
	constructor(value, priority) {
		this.value = value;
		this.priority = priority;
	}
}

class PriorityQueue {
	constructor() {
		this.values = [];
	}
	bubbleUp(childIndex) {
		const childElement = this.values[childIndex];
		while (childIndex > 0) {
			const parentIndex = Math.floor((childIndex - 1) / 2);
			const parentElement = this.values[parentIndex];
			if (childElement.priority >= parentElement.priority) break;
			this.values[parentIndex] = childElement;
			this.values[childIndex] = parentElement;
			childIndex = parentIndex;
		}
	}
	enqueue(value, priority) {
		const newNode = new Node(value, priority);
		if (!this.values.length) return this.values.push(newNode);
		this.values.push(newNode);
		let size = this.values.length;
		let childIndex = size - 1;
		this.bubbleUp(childIndex);
	}
	sinkDown() {
		let index = 0;
		const length = this.values.length;
		let element = this.values[0];
		let leftChildIndex, rightChildIndex;

		if (length === 1) return;
		if (length === 2) {
			leftChildIndex = 0;
			rightChildIndex = 1;

			if (
				this.values[rightChildIndex].priority <
				this.values[leftChildIndex].priority
			) {
				this.values[leftChildIndex] = this.values[rightChildIndex];
				this.values[rightChildIndex] = element;
			}
		}
		if (length > 2) {
			while (true) {
				leftChildIndex = index * 2 + 1;
				rightChildIndex = index * 2 + 2;
				let leftChild, rightChild;
				let swap = null;

				if (leftChildIndex < length) {
					leftChild = this.values[leftChildIndex];
					if (leftChild.priority < element.priority) swap = rightChildIndex;
				}
				if (rightChildIndex < length) {
					rightChild = this.values[rightChildIndex];
					if (
						(rightChild.priority < element.priority && swap === null) ||
						(swap !== null && rightChild.priority < leftChild.priority)
					) {
						swap = rightChildIndex;
					}
				}
				if (swap === null) break;
				this.values[index] = this.values[swap];
				this.values[swap] = element;
				index = swap;
			}
		}
	}
	dequeue() {
		let min = this.values[0];
		const end = this.values.pop();
		if (!this.values.length) return min;
		this.values[0] = end;
		this.sinkDown();
		return min;
	}
}

const priorityQueue = new PriorityQueue();
priorityQueue.enqueue("a", 0);
priorityQueue.enqueue("b", 3);
priorityQueue.enqueue("c", 2);
priorityQueue.enqueue("w", 5);
console.log(priorityQueue);
priorityQueue.dequeue();
console.log(priorityQueue);
