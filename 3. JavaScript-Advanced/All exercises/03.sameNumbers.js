function sameNums(params) {
	let numAsString = params.toString();
	let isSame = true;

	for (const el of numAsString) {
		if (numAsString[0] !== el) {
			isSame = false;
			break;
		}
	}

	let sum = numAsString
		.split("")
		.reduce((acc, val) => Number(acc) + Number(val), 0);
	console.log(isSame);
	console.log(sum);
}
sameNums(2222222);
sameNums(1234);
