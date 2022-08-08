class Graph {
	constructor() {
		this.adjacencyList = {};
	}
	addVertex(vertex) {
		if (!this.adjacencyList[vertex])
			this.adjacencyList = { ...this.adjacencyList, [vertex]: [] };
	}
	addEdge(vertex1, vertex2) {
		this.adjacencyList[vertex1].push(vertex2);
		this.adjacencyList[vertex2].push(vertex1);
	}
	removeEdge(vertex1, vertex2) {
		this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
			(v) => v !== vertex2,
		);
		this.adjacencyList[vertex2] = this.adjacencyList[vertex1].filter(
			(v) => v !== vertex1,
		);
	}
	removeVertex(vertex) {
		while (this.adjacencyList[vertex].length) {
			const adjacencyVertex = this.adjacencyList[vertex].pop();
			this.removeEdge(vertex, adjacencyVertex);
		}

		delete this.adjacencyList[vertex];
	}
}

const g = new Graph();
g.addVertex("cairo");
g.addVertex("tokyo");
g.addVertex("berlin");
console.log(g);
g.addEdge("cairo", "tokyo");
g.addEdge("cairo", "berlin");
console.log(g);
g.removeEdge("cairo", "berlin");
console.log(g);
g.removeVertex("cairo");
console.log(g);
