function addRemove(array) {
	let res = [];
	let iterator = 1;
	array.forEach((command) => {
		command === "add" ? res.push(iterator++) : res.pop();
	});
	res.length > 0
		? res.forEach((el) => console.log(el))
		: console.log("Empty");
}
addRemove(["add", "add", "remove", "add", "add"]);
addRemove(["add", "add", "add", "add"]);
addRemove(["remove", "remove", "remove"]);
