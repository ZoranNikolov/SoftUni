function biggerHalf(array) {
	let sorted = array
		.sort((a, b) => a - b)
		.slice(Math.floor(array.length / 2));
	return sorted;
}
biggerHalf([3, 19, 14, 7, 2, 19, 6]);
