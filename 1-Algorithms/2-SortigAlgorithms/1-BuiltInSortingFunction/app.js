//Built In Sort Function/Method  Array.prototype.sort()
// returns the reference to the original array But  now sorted.
//How Sort Work Convert ArrayElements  To String Then  Comparing  Their Sequence of UTF-16 code units values
//Can Take A CallBackFunction As argument CallBackFunction Is A CompareFunction
//CallBackFunction Take Two Arguments First A===NextElement Second B=CurrentElement  Determine Sorting Order Based On Return Value
// IF Return Value For A-B is
// 1-Negative Than A Come Before B
// 2-Positive Than B Come Before A
// 3-0 A and B The Same
//--------------------------------------------------------------
const characterArray = ["a", "c", "a", "d", "w", "q", "s"];
console.log(characterArray.sort());
//--------------------------------------------------------------
const NumberArray = [1, 8, 9, 555, 14800, 5, 2];
const compareFunctionForSortingNumbersAsc = (a, b) => a - b;
const compareFunctionForSortingNumberDesc = (a, b) => b - a;
console.log(NumberArray.sort(compareFunctionForSortingNumbersAsc)); //asc Order
console.log(NumberArray.sort(compareFunctionDesc)); //desc Order
//--------------------------------------------------------------
const Words = ["word", "excel", "access", "outlook", "paint"];
const compareFunctionForSortArrayOfWordsByLengthAsc = (a, b) => {
	console.log(`A:${a} b:${b}`);
	return a.length - b.length;
};
console.log(Words);
console.log(Words.sort(compareFunctionForSortArrayOfWordsByLengthAsc));
//--------------------------------------------------------------
