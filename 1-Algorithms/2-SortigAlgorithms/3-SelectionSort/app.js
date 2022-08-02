const numbers = [5, 6, 20, 90, 104, 1, 55];
const swapArrayElement = (array, a, b) => {
	const temp = array[a];
	array[a] = array[b];
	array[b] = temp;
};
const SelectionSort = (array) => {
	const arraySize = array.length;
	let lowest;
	for (let i = 0; i < arraySize; i++) {
		lowest = i;
		for (let j = i + 1; j < arraySize; j++) {
			if (array[lowest] > array[j]) {
				lowest = j;
			}
		}
		if (lowest !== i) {
			swapArrayElement(array, i, lowest);
		}

		console.log(array);
		console.log("-------------------------");

		console.log(array);
		console.log("-------------------------");
		console.log("-------------------------");
	}
	return array;
}; //o(n^2);
SelectionSort(numbers);
