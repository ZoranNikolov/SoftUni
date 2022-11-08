function greatestCommonDivisorGcd(a, b) {
	let divisor = 0;

	for (let i = Math.max(a, b); i > 0; i--) {
		if (a % i === 0 && b % i === 0) {
			console.log(i);
			break;
		}
	}
}
greatestCommonDivisorGcd(2154, 458);
