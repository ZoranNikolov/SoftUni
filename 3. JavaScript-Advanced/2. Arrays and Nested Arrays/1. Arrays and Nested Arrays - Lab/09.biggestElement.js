function biggestElement(array) {
	let biggest = Number.MIN_SAFE_INTEGER;

	for (let i = 0; i < array.length; i++) {
		for (const el of array[i]) {
			if (biggest < el) {
				biggest = el;
			}
		}
	}
	return biggest;
}
biggestElement([
	[3, 5, 7, 12],
	[-1, 4, 33, 2],
	[8, 3, 0, 4],
]);
