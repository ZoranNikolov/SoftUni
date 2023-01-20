function solve(area, volume, input) {
	return JSON
				.parse(input)
				.map((entry) => {
		return {
			area: area.call(entry),
			volume: volume.call(entry),
		};
	});
}

function area() {
	return Math.abs(this.x * this.y);
}

function vol() {
	return Math.abs(this.x * this.y * this.z);
}

let result = solve(
	area,
	vol,
	`[{"x":"1","y":"2","z":"10"},
	{"x":"7","y":"7","z":"10"},
	{"x":"5","y":"2","z":"10"}]`
);

console.log(JSON.stringify(result));
