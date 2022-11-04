// function solve(x, y, func) {
// 	return func(x, y);
// }
// console.log(solve(5, 2, (x, y) => x * y));

function another(a, b) {
	return function () {
		return a + b;
	};
}
let func = another(10, 20);
let res = func();
console.log(res);

function aggregateElements(elements) {
	aggregate(elements, 0, (a, b) => a + b);
	aggregate(elements, 0, (a, b) => a + 1 / b);
	aggregate(elements, "", (a, b) => a + b);

	function aggregate(arr, initVal, func) {
		let val = initVal;
		for (let i = 0; i < arr.length; i++) {
			val = func(val, arr[i]);
		}
		console.log(val);
	}
}
aggregateElements([1, 2, 4]);
