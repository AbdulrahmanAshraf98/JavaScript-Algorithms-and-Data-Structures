const resultContainer = document.getElementById("Result");
//Binary Search rules
// 1- must be an Sorted Array
//Binary Search
// function accepted array and value
// create Left Pointer Right Pointer  MiddleElement
// if MIDDLE ELEMENT GREATER THAN VALUE Start = Middle + 1 or Less Than End = Middle - 1
// time best o(1)  average/worst  o(log n)
const binarySearch = (array, value) => {
	const arraySize = array.length;
	let start = 0;
	let end = arraySize - 1;
	let middle = Math.floor((start + end) / 2);
	while (array[middle] !== value && start <= end) {
		if (array[middle] < value) {
			start = middle + 1;
		} else {
			end = middle - 1;
		}
		middle = Math.floor((start + end) / 2);
	}
	return array[middle] === value ? middle : -1;
};

const index = binarySearch([2, 5, 6, 9, 13, 15, 28, 30], 5);
resultContainer.insertAdjacentText("afterbegin", index);
