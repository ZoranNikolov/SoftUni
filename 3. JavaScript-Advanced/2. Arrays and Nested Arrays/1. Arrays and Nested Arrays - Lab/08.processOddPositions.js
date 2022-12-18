function processOddPositions(array) {
	let res = [];
	for (let i = 0; i < array.length; i++) {
		if (i % 2 !== 0) {
			res.push(array[i]);
		}
	}
	res = res.reverse().map((x) => x * 2);
	console.log(res);
}
processOddPositions([10, 15, 20, 25]);
