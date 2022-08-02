// function Takes two Arguments First String and Second  substring
// return Count of SubString in String if SubString Founded IF Not -1;

const naiveSearchString = (string, subString) => {
	const longStringLength = string.length;
	const subStringLength = subString.length;
	let count = 0;
	for (let i = 0; i < longStringLength; i++) {
		for (let j = 0; j < longStringLength; j++) {
			if (string[i] !== subString[j]) break;
			i++;
			if (j === subStringLength - 1) count++;
		}
	}
	return count;
};

console.log(naiveSearchString("lole loled lol", "lol"));
