/*

The async functions return promises.

async function myFunction() {
	return "Hello";
}

  The above function is the sa	me as the one below:

function myFunction() {
	return Promise.resolve("Hello");
}

async function myFunction() {
	return "Hello";
}

myFunction().then(
	function(value) {myDisplayer(value);},
	function(error) {myDisplayer(error);}
);

If we expect a normal value, we can use the following syntax:

async function myFunction() {
	return "Hello";
}
myFunction().then(
	function(value) {myDisplayer(value);}
);

Await syntax:

async function myDisplay() {
	let myPromise = new Promise(function(resolve, reject) {
	resolve("I love You !!");
});

document.getElementById("demo").innerHTML = await myPromise;
}

myDisplay();

Await example without reject:

async function myDisplay() {
	let myPromise = new Promise(function(resolve) {
	resolve("I love You !!")});
	document.getElementById("demo").innerHTML = await myPromise;
}

myDisplay();

Waiting for a Timeout example:

async function myDisplay() {
	let myPromise = new Promise(function(resolve) {
	setTimeout(function() {resolve("I love You !!");}, 3000);});
	document.getElementById("demo").innerHTML = await myPromise;
}

myDisplay();

*/
