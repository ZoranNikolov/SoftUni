function equalNeoghbors(matrix) {
	let pairCounter = 0;

	for (let row = 0; row < matrix.length - 1; row++) {
		for (let col = 1; col < matrix[row].length; col++) {
			if (matrix[row][col] == matrix[row + 1][col]) {
				pairCounter++;
			}

			if (matrix[row][col] == matrix[row][col - 1]) {
				pairCounter++;
			}
		}
	}

	for (let row = 0; row < matrix[matrix.length - 1].length; row++) {
		if (
			matrix[matrix.length - 1][row] ===
			matrix[matrix.length - 1][row + 1]
		) {
			pairCounter++;
		}
	}

	for (let col = 0; col < matrix.length - 1; col++) {
		if (matrix[col][0] == matrix[col + 1][0]) {
			pairCounter++;
		}
	}

	console.log(pairCounter);
}
equalNeoghbors([
	["test", "yes", "yo", "ho"],
	["well", "done", "yo", "6"],
	["not", "done", "yet", "5"],
]);
