function squareOfStars(size) {
	let arr = [];

	for (let col = 0; col < size; col++) {
		arr[col] = "*";
		for (let row = 0; row < size; row++) {
			arr.push([row], [col]);
		}
	}
	console.log(arr);
}
// squareOfStars(1);
squareOfStars(5);
// squareOfStars(7);
