function printEveryNthElementFromArray(array, step) {
	return array.filter((el, i) => {
		if (i % step === 0) {
			return el;
		}
	});
}
printEveryNthElementFromArray(["5", "20", "31", "4", "20"], 2);
