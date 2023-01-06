function jansNotation(arr) {
	res = [];
	let numbers = [];
	let operators = [];

	let operationEnum = {
		"+": (a, b) => a + b,
		"-": (a, b) => a - b,
		"*": (a, b) => a * b,
		"/": (a, b) => a / b,
	};

	for (const el of arr) {
		if (typeof el == "number") {
			numbers.push(el);
		} else {
			operators.push(el);
		}
	}

	if (operators.length < numbers.length - 1) {
		console.log("Error: too many operands!");
		return;
	} else if (operators.length === numbers.length || numbers.length === 0) {
		console.log("Error: not enough operands!");
		return;
	}

	for (const el of arr) {
		if (typeof el == "number") {
			res.push(el);
			continue;
		}
		let numA = res.pop();
		let numB = res.pop();
		let result = operationEnum[el](numB, numA);
		res.push(result);
	}
	console.log(res.join(""));
}
jansNotation([5, 3, 4, "*", "-"]);
