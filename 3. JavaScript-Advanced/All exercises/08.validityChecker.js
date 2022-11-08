function checker(x1, y1, x2, y2) {
	function distance(x1, y1, x2, y2) {
		let distH = x1 - x2;
		let distY = y1 - y2;
		return Math.sqrt(Math.pow(distH, 2) + Math.pow(distY, 2));
	}

	Number.isInteger(distance(x1, y1, 0, 0))
		? console.log(`{${x1}, ${y1}} to {0, 0} is valid`)
		: console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);

	Number.isInteger(distance(x2, y2, 0, 0))
		? console.log(`{${x2}, ${y2}} to {0, 0} is valid`)
		: console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);

	Number.isInteger(distance(x1, y1, x2, y2))
		? console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`)
		: console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
}
checker(3, 0, 0, 4);
checker(2, 1, 1, 1);
