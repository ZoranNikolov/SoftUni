function negativeOrPositiveNumbers(array) {
	let res = [];

	for (let el of array) {
		el < 0 ? res.unshift(el) : res.push(el);
	}
	res.forEach((el) => console.log(el));
}
negativeOrPositiveNumbers([7, -2, 8, 9]);
