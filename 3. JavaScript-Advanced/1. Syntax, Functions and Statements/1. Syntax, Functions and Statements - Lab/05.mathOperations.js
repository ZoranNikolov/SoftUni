function mathOperations(opA, opB, operator) {
	let commandParser = {
		"+"(a, b) {
			return a + b;
		},
		"-"(a, b) {
			return a - b;
		},
		"*"(a, b) {
			return a * b;
		},
		"/"(a, b) {
			return a / b;
		},
		"%"(a, b) {
			return a % b;
		},
		"**"(a, b) {
			return a ** b;
		},
	};
	let result = commandParser[operator](opA, opB);
	console.log(result);
}
mathOperations(3, 5.5, "*");
