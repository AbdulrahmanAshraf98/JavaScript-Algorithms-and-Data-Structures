const numbers = [9, 1, 5, 100, 50, 5, 3, 2, 555];
const numbers2 = [1, 2, 3, 4, 10, 9];
const merge = (firstArray, secondArray) => {
	const firstArraySize = firstArray.length;
	const secondArraySize = secondArray.length;
	const result = [];
	let i = 0;
	let j = 0;
	while (i < firstArraySize && j < secondArraySize) {
		if (firstArray[i] < secondArray[j]) {
			result.push(firstArray[i]);
			i++;
		} else {
			result.push(secondArray[j]);
			j++;
		}
	}
	while (i < firstArraySize) {
		result.push(firstArray[i]);
		i++;
	}
	while (j < secondArraySize) {
		result.push(secondArray[j]);
		j++;
	}
	return result;
};
const mergeSort = (array) => {
	if (array.length === 1) {
		return array;
	}
	let middleIndex = Math.floor(array.length / 2);
	let left = array.slice(0, middleIndex);
	let right = array.slice(middleIndex);
	left = mergeSort(left);
	right = mergeSort(right);
	return merge(left, right);
};

const x = mergeSort(numbers);
console.log(x);
