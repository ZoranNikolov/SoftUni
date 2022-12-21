function extractIncreasingSubsequenceFromArray(array) {
	let biggest = Number.MIN_SAFE_INTEGER;
	let res = [];
	array.forEach((num) => {
		if (num >= biggest) {
			res.push(num);
			biggest = num;
		}
	});
	return res
}
extractIncreasingSubsequenceFromArray([1, 3, 8, 4, 10, 12, 3, 2, 24]);
extractIncreasingSubsequenceFromArray([1, 2, 3, 4]);
extractIncreasingSubsequenceFromArray([20, 3, 2, 15, 6, 1]);
