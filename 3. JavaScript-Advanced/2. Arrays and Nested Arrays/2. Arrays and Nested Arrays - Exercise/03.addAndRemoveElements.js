function addRemove(array) {
	let res = [];
	let iterator = 1;
	for (const el of array) {
		if (el === "add") {
			res.push(iterator);
		} else {
			res.pop();
		}
		iterator++;
	}
	res.length > 0
		? res.forEach((el) => console.log(el))
		: console.log("Empty");
}
addRemove(["add", "add", "remove", "add", "add"]);
addRemove(["add", "add", "add", "add"]);
addRemove(["remove", "remove", "remove"]);
