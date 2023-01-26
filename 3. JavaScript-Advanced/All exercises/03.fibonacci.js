function getFibonator() {
	let firstNum = 0;
	let secNum = 1;

	return function () {
		let sum = firstNum + secNum;
		firstNum = secNum;
		secNum = sum;
		return firstNum;
	};
}
let fib = getFibonator();
console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
console.log(fib()); // 5
console.log(fib()); // 8
console.log(fib()); // 13
