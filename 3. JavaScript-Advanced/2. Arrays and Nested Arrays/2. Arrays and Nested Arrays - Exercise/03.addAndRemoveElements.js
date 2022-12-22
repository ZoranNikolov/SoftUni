function addRemove(array) {
	let res = [];
	let iterator = 1;
	array.forEach((command) => {
		command === "add" ? res.push(iterator) : res.pop();
		iterator++;
	});
	res.length > 0 ? console.log(res.join("\n")) : console.log("Empty");
}
addRemove(["add", "add", "remove", "add", "add"]);
addRemove(["add", "add", "add", "add"]);
addRemove(["remove", "remove", "remove"]);
