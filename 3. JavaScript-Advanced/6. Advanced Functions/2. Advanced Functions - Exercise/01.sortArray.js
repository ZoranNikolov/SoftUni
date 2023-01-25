function sortArray(arr, type) {
	return type === "asc"
		? arr.sort((a, b) => a - b)
		: arr.sort((a, b) => b - a);
}
console.log(sortArray([14, 7, 17, 6, 8], "asc"));
