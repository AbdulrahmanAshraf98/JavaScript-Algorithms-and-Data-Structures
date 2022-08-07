class HashMap {
	constructor(size = 53) {
		this.keyMap = new Array(size);
	}
	_hash(key) {
		let total = 0;
		const WEIRD_PRIME = 31;
		for (let i = 0; i < Math.min(key.length, 100); i++) {
			let value = key[i].charCodeAt() - 96;
			total = (total * WEIRD_PRIME + value) % this.keyMap.length;
		}
		return total;
	}
	set(key, value) {
		const hashKey = this._hash(key);
		if (!this.keyMap[hashKey]) this.keyMap[hashKey] = [];

		this.keyMap[hashKey] = [...this.keyMap[hashKey], [key, value]];
	}
	get(key) {
		const hashKey = this._hash(key);
		if (!this.keyMap[hashKey]) return undefined;
		for (let i = 0; i < this.keyMap[hashKey].length; i++) {
			if (this.keyMap[hashKey][i][0] === key) {
				return this.keyMap[hashKey][i][1];
			}
		}
	}
	keys() {
		let keys = [];
		this.keyMap.forEach((key) => {
			if (key) {
				key.forEach((keyElement) => {
					if (!keys.includes(keyElement[0])) keys.push(keyElement[0]);
				});
			}
		});
		return keys;
	}
	values() {
		let values = [];
		this.keyMap.forEach((key) => {
			if (key) {
				key.forEach((keyElement) => {
					if (!values.includes(keyElement[1])) values.push(keyElement[1]);
				});
			}
		});
		return values;
	}
}

// const hashFunction = (key, arraySize) => {
// 	let total = 0;
// 	for (let c of key) {
// 		let value = c.charCodeAt() - 96;
// 		total = value;keys
// 	}
// 	return total % arraySize;
// };
// const optimizeHashFunction = (key, arraySize) => {
// 	let total = 0;
// 	const WEIRD_PRIME = 31;
// 	for (let i = 0; i < Math.min(key.length, 100); i++) {
// 		let value = key[i].charCodeAt() - 96;
// 		total = (total * WEIRD_PRIME + value) % arraySize;
// 	}
// 	return total;
// };

// console.log(hashFunction("black", 10));
// console.log(hashFunction("blue", 10));
// console.log(optimizeHashFunction("blue", 13));
// console.log(optimizeHashFunction("black", 13));
const hashmap = new HashMap();
hashmap.set("pink", "#0000");
hashmap.set("white", "#0300");
hashmap.set("welcome", "#0700");
hashmap.set("pink", "#0000");
console.log(hashmap);
hashmap.values();
console.log(hashmap.values());
console.log(hashmap.keys());
console.log(hashmap.get("welcome"));
