const resultContainer = document.getElementById("Result");

// 1-function accept an array and value
// 2-check is value found in array
// 3- return index at which the element is found or if not found return -1;
// 4- time  best:o(1)  average:o(n/2)  worst:O(n)
const linearSearch = (array, value) => {
	const arrayLength = array.length;
	let result = -1;
	for (let i = 0; i <= arrayLength; i++) {
		if (array[i] === value) {
			result = i;
			break; //end loop is Item Founded
		}
	}
	return result;
};
// 1-function accept an array and value
// 2-check is value found in array
// 3- return Array  Of AllIndexes at which the element is found or if not found return -1;
// 4- time  best:o(1)  average:o(n)  worst:O(n)
const findAllIndexes = (array, value) => {
	let indexes = [];
	array.forEach((element, index) => {
		if (element === value) {
			indexes.push(index);
		}
	});
	return indexes.length ? indexes : -1;
};

const foundedIndex = linearSearch([34, 51, 1, 2, 3, 45, 4, 687], 4);
const foundedALlIndexes = findAllIndexes([34, 51, 1, 4, 3, 45, 4, 687], 4);
resultContainer.insertAdjacentText("afterbegin", foundedIndex);
resultContainer.insertAdjacentText("afterend", foundedALlIndexes);
