// function getThis() {
// 	return this;
// }
// const obj1 = { name: "obj1" };
// const obj2 = { name: "obj2" };
// obj1.getThis = getThis;
// obj2.getThis = getThis;
// console.log(obj1.getThis()); // { name: 'obj1', getThis: [Function: getThis] }
// console.log(obj2.getThis()); // { name: 'obj2', getThis: [Function: getThis] }

// function outerFunction(x) {
// 	var outerVariable = x;

// 	return function innerFunction() {
// 		console.log(outerVariable);
// 	};
// }

// var closure = outerFunction(5);
// closure(); // Output: 5

// function add(x, y, z) {
// 	return x + y + z;
// }
// add(1, 2, 3);

// function partial(fn, ...args) {
// 	return function (...moreArgs) {
// 		return fn(...args, ...moreArgs);
// 	};
// }

// const plus3 = partial(add, 1, 2);
// ;
// console.log(plus3(3));

// let sum = (x, y, z) => x + y + z;

// // let partialSum = (x, y) => (z) => x + y + z;

// let partialSum = function (x, y) {
// 	return function (z) {
// 		return x + y + z;
// 	};
// };

// let sumA = sum;

// let sumB = partialSum(2, 3);

// let result = sumB(4);

// // console.log(sumA(1, 2, null));
// console.log(result);

// function sum(x, y, z) {
// 	return x + y + z;
// }

// let mySum = sum(1, 2, 3);

// let curriedSum = (x) => (y) => (z) => sum(x, y, z);

// let first = curriedSum(1),
// 	second = first(2),
// 	result = second(3);

// let newRres = curriedSum(1)(2)(3);

// console.log(newRres);

const add = (function () {
	let counter = 0;
	return function () {
		counter += 1;
		return counter;
	};
})();

console.log(add());
