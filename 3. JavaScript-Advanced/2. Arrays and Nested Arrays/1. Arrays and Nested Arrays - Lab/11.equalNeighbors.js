function equalNeoghbors(matrix) {
	let pairCounter = 0;

	for (let row = 0; row < matrix.length; row++) {
		for (let col = 0; col < matrix[row].length; col++) {
			if (row + 1 < matrix.length && col + 1 <= matrix[row].length) {
				if (matrix[row][col] === matrix[row + 1][col] && matrix[row][col] !== undefined) {
					pairCounter++;
				}
				if (matrix[row][col] === matrix[row][col + 1] && matrix[row][col] !== undefined) {
					pairCounter++;
				}
			}
		}
	}

	for (let col = 0; col < matrix[0][matrix.length - 1]; col++) {
		let lastRow = matrix.length - 1;
		if (matrix[lastRow][col] === matrix[lastRow][col + 1] && matrix[lastRow][col] !== undefined) {
			pairCounter++;
		}
	}
	
	console.log(pairCounter);
}
equalNeoghbors([
	["2", "2", "5", "7", "4"],
	["4", "0", "5", "3", "4"],
	["2", "5", "5", "4", "2"],
]);
equalNeoghbors([
	["test", "yes", "yo", "ho"],
	["well", "done", "yo", "6"],
	["not", "done", "yet", "5"],
]);
equalNeoghbors([
	["2", "3", "4", "7", "0"],
	["4", "0", "5", "3", "4"],
	["2", "3", "5", "4", "2"],
	["9", "8", "7", "5", "4"],
]);
