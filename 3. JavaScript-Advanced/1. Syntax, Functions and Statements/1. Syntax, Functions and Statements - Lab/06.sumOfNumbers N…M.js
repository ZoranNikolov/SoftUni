function sumOfNumbers(n, m) {
	numA = Number(n);
	numB = Number(m);
	let res = 0;
	for (let i = numA; i <= numB; i++) {
		res += i;
	}
	console.log(res);
}
sumOfNumbers("1", "5");
