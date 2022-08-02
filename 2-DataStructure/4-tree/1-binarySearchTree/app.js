class Node {
	constructor(value) {
		this.value = value;
		this.right = null;
		this.left = null;
	}
}

class BinarySearchTree {
	constructor() {
		this.root = null;
	}
	insert(value) {
		const newNode = new Node(value);
		if (!this.root) {
			this.root = newNode;
			return this;
		}
		let currentNode = this.root;
		while (true) {
			if (value === currentNode) return null;
			if (currentNode.value < value) {
				if (!currentNode.right) {
					currentNode.right = newNode;
					return this;
				}
				currentNode = currentNode.right;
			} else if (currentNode.value > value) {
				if (!currentNode.left) {
					currentNode.left = newNode;
					return this;
				}
				currentNode = currentNode.left;
			}
		}
	}
	find(value) {
		if (!this.root) return null;
		let found = false;
		let currentNode = this.root;
		while (currentNode && !found) {
			if (currentNode.value < value) {
				currentNode = currentNode.right;
			} else if (currentNode.value > value) {
				currentNode = currentNode.left;
			} else {
				found = true;
			}
		}
		return currentNode;
	}
	contains(value) {
		if (!this.root) return null;
		let found = false;
		let currentNode = this.root;
		while (currentNode && !found) {
			if (currentNode.value < value) {
				currentNode = currentNode.right;
			} else if (currentNode.value > value) {
				currentNode = currentNode.left;
			} else {
				found = true;
			}
		}
		return currentNode ? true : false;
	}
	traversalUsingBreathSearchFirst() {
		let queue = [];
		let data = [];
		let node;
		queue.push(this.root);
		while (queue.length) {
			node = queue.shift();
			data.push(node.value);
			if (node.left) queue.push(node.left);
			if (node.right) queue.push(node.right);
		}
		return data;
	}
	traversalDepthFirstSearchPreOrder() {
		let data = [];
		let ParentNode = this.root;
		const traversalPreOrder = (node) => {
			data.push(node.value);
			if (node.left) traversalPreOrder(node.left);
			if (node.right) traversalPreOrder(node.right);
		};
		traversalPreOrder(ParentNode);
		return data;
	}
	traversalDepthFirstSearchPostOrder() {
		let data = [];
		let ParentNode = this.root;
		const traversalPostOrder = (node) => {
			if (node.left) traversalPostOrder(node.left);
			if (node.right) traversalPostOrder(node.right);
			data.push(node.value);
		};
		traversalPostOrder(ParentNode);
		return data;
	}
	traversalDepthFirstSearchInOrder() {
		let data = [];
		let ParentNode = this.root;
		const traversalInOrder = (node) => {
			if (node.left) traversalInOrder(node.left);
			data.push(node.value);
			if (node.right) traversalInOrder(node.right);
		};
		traversalInOrder(ParentNode);
		return data;
	}
}

const bst = new BinarySearchTree();
bst.insert(10);
bst.insert(20);
bst.insert(8);
bst.insert(9);
console.log(bst);
console.log(bst.find(55));
console.log(bst.contains(55));
console.log(bst.traversalUsingBreathSearchFirst());
console.log(bst.traversalDepthFirstSearchPreOrder());
console.log(bst.traversalDepthFirstSearchPostOrder());
console.log(bst.traversalDepthFirstSearchInOrder());
