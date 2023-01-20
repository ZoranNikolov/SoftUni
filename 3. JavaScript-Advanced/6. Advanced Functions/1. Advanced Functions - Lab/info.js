/* 
1. Let lives in the scope and cannot be accessed before initialisation.
2. Function declaration can be executed in the current function scope.
3. Function has access to the outer scope.
4. If the funcion is a value of a let variable, the rules about variables are valid for the function (point 1.).
5. Arrow functions '() =>' do not have their own this. They use this of their outer functions.
6. When we call a function with point (cat.sayHello()), this points to the object befire the point.
7. call() - forces a function call to use a particular object for 'this' binding. 
Example - mewFunc.call(anotherCat) -> mewFunc is called in the context of 'anotherCat'. This refers to 'abotherCat'.
8. bind() - method creates a new function that, when called, has its this keyword set to the provided value, 
with a given sequence of arguments preceding any provided when the new function is called.

hoisting - only var and function declaration
*/

/* examples
function myFunc(a, b) { // function declaration
	return a + b;
}
let myFunc = function (a, b) { // function expression
	return a + b;
}
let myFunc = (a, b) => a + b; // function expression with lambda

function createFunc(myFunc) {
	return function (a, b, c) {
		return myFunc(a, b, c);
	};
}
let sum = createFunc((a, b, c) => a + b + c);
console.log(sum(10, 20, 30));
*/

let cat = {
	name: "Sharo",
	age: 10,
	grow(ageCount, message) {
		this.age += ageCount;
		console.log("Age increased: " + message);
	},
};

let anotherCat = {
	name: "Another Cat",
	age: 20,
};

let growFunc = cat.grow.bind(cat);

growFunc(15, "TOP!");
console.log(cat.age);
