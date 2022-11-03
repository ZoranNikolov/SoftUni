function circleArea(input) {
	let type = typeof input;

	if (type === "number") {
		let res = Math.pow(input, 2) * Math.PI;
		console.log(res.toFixed(2));
	} else {
		console.log(
			`We can not calculate the circle area, because we receive a ${type}.`
		);
	}
}
circleArea(5);
circleArea([]);
