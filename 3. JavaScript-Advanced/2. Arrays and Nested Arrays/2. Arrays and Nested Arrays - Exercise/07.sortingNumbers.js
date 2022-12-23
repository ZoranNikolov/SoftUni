function sortingNumbers(array) {
	let res = [];
	array.sort((a, b) => a - b);
	while (array.length > 0) {
		res.push(array.shift(), array.pop());
	}
	return res;
}
console.log(sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));
