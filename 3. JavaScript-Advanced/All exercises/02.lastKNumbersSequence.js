function lastKNumbersSequence(n, k) {
	let res = [1];
	while (res.length < n) {
		let lastKnumbers = res.slice(-k);
		res.push(lastKnumbers.reduce((acc, val) => acc + val, 0));
	}
	return res;
}
lastKNumbersSequence(6, 3);
lastKNumbersSequence(8, 2);
