function rectangle(width, height, color) {
	let res = {
		width,
		height,
		color: color[0].toUpperCase() + color.substring(1),
		calcArea() {
			return this.width * this.height;
		},
	};
	return res;
}
let rect = rectangle(4, 5, "red");
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());
