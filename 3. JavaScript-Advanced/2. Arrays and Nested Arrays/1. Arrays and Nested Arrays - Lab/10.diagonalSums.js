function diagonalSums(array) {
	let diagonalsObj = {
		diagonalA: 0,
		directionA: 0,
		diagonalB: 0,
		directionB: array[0].length - 1,
	};

	for (let row = 0; row < array.length; row++) {
		for (let col = 0; col < array[row].length; col++) {
			if (diagonalsObj.directionA === col) {
				diagonalsObj.diagonalA += array[row][col];
			}
			if (diagonalsObj.directionB === col) {
				diagonalsObj.diagonalB += array[row][col];
			}
		}
		diagonalsObj.directionA++;
		diagonalsObj.directionB--;
	}
	console.log(diagonalsObj.diagonalA + " " + diagonalsObj.diagonalB);
}
diagonalSums([
	[3, 5, 17],
	[-1, 7, 14],
	[1, -8, 89],
]);
