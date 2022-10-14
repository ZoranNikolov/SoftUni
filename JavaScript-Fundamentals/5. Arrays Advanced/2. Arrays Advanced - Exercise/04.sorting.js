function sorting(input) {
	let result = [];
	let array = input.sort((a, b) => a - b);
	while (array.length !== 0) {
		result.push(array.pop(), array.shift());
	}
	console.log(result.join(" "));
}
sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);
sorting([34, 2, 32, 45, 690, 6, 32, 7, 19, 47]);
