class MaxBinaryHeap {
	constructor() {
		this.values = [];
	}
	bubbleUp(childIndex) {
		const childElement = this.values[childIndex];
		while (childIndex > 0) {
			const parentIndex = Math.floor((childIndex - 1) / 2);
			const parentElement = this.values[parentIndex];
			if (childElement <= parentElement) break;
			this.values[parentIndex] = childElement;
			this.values[childIndex] = parentElement;
			childIndex = parentIndex;
		}
	}
	insert(element) {
		if (!this.values.length) return this.values.push(element);
		this.values.push(element);
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
			if (this.values[rightChildIndex] > this.values[leftChildIndex]) {
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
					console.log(leftChildIndex);
					if (leftChild > element) swap = rightChildIndex;
				}
				if (rightChildIndex < length) {
					rightChild = this.values[rightChildIndex];
					if (
						(rightChild > element && swap === null) ||
						(swap !== null && rightChild > leftChild)
					) {
						console.log(rightChild);
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
	extractMax() {
		let max = this.values[0];
		const end = this.values.pop();
		if (!this.length) return;
		this.values[0] = end;
		this.sinkDown();
		// console.log(this.values[0]);
		return max;
	}
}

const maxBinaryHeap = new MaxBinaryHeap();
maxBinaryHeap.insert(41);
maxBinaryHeap.insert(39);
maxBinaryHeap.insert(33);
console.log(maxBinaryHeap);
maxBinaryHeap.extractMax();
maxBinaryHeap.extractMax();
maxBinaryHeap.extractMax();
console.log(maxBinaryHeap);