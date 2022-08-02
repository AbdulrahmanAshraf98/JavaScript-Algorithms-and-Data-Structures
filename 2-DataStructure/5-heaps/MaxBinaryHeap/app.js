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
}

const maxBinaryHeap = new MaxBinaryHeap();
maxBinaryHeap.insert(41);
maxBinaryHeap.insert(39);
maxBinaryHeap.insert(33);
maxBinaryHeap.insert(18);
maxBinaryHeap.insert(27);
maxBinaryHeap.insert(12);
maxBinaryHeap.insert(55);
console.log(maxBinaryHeap);
