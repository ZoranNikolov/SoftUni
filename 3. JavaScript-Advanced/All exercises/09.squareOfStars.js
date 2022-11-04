function squareOfStars(size) {
	let arr = [];

	for (let col = 0; col < size; col++) {
		arr[col] = [];
		for (let row = 0; row < size; row++) {
			arr[col][row] = "*";
		}
	}

	for (const el of arr) {
		console.log(el.join(" "));
	}
}
// squareOfStars(1);
squareOfStars(5);
// squareOfStars(7);
