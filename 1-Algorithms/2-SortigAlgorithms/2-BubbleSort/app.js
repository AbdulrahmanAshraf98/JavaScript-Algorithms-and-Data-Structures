//create BubbleSorting Function Take Array As Argument And Return SortedArray As Output
//Create Swap Function
//Take A Element Of Array And Iteration over All ELement Of Array And Compere It To The Element
//If The Element Grater Than Any Element In The Array Swap To Element
//Repeat The Process  Again  For rest of Element In Array
//Time O(n^2)
const swap = (array, firstElement, secondElement) => {
	const temp = array[firstElement];
	array[firstElement] = array[secondElement];
	array[secondElement] = temp;
};

const bubbleSort = (array) => {
	const arraySize = array.length;

	for (let i = 0; i < arraySize; i++) {
		for (let j = i + 1; j < arraySize; j++) {
			console.log(array, array[i], array[j]);
			if (array[i] > array[j]) {
				swap(array, i, j);
			}
		}
	}
	return array;
};

//optimizeSolution With noSwaps
//Time Worst O(n^2) Best Of Array Is Almost Sorted o(n)
const bubbleSortOptimize = (array) => {
	const arraySize = array.length;
	let noSwaps;
	for (let i = 0; i < arraySize; i++) {
		noSwaps = true;
		for (let j = i + 1; j < arraySize; j++) {
			console.log(array, array[i], array[j]);
			if (array[i] > array[j]) {
				swap(array, i, j);
				noSwaps = false;
			}
			if (noSwaps) {
				break;
			}
		}
	}
	return array;
};
const NumberArray = [37, 8, 29, 36, 5, 8, 40, 45];
const NumberArray2 = [37, 8, 29, 36, 5, 8, 40, 45];
console.log("------------------------------");
console.log(bubbleSort(NumberArray));
console.log("------------------------------");
console.log("optimizeSolution");
console.log("------------------------------");
console.log(bubbleSortOptimize(NumberArray2));
console.log("------------------------------");
