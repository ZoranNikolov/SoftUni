function orbit(input) {
	let rows = input[0];
	let cols = input[1];
	let starRow = input[2];
	let starCol = input[3];

	let matrix = [];

	for (let i = 0; i < rows; i++) {
		matrix.push([]);
	}

	for (let row = 0; row < rows; row++) {
		for (let col = 0; col < cols; col++) {
			matrix[row][col] =
				Math.max(Math.abs(row - starRow), Math.abs(col - starCol)) + 1;
		}
	}
	matrix.forEach((row) => console.log(row.join(" ")));
}
orbit([5, 5, 2, 2]);
orbit([4, 4, 0, 0]);
