function houseParty(array) {
	let listArray = [];

	for (const el of array) {
		let command = el.split(" ");
		let name = command[0];

		if (command.length === 3) {
			if (!listArray.includes(name)) {
				listArray.push(name);
			} else {
				console.log(`${name} is already in the list!`);
			}
		} else {
			if (listArray.includes(name)) {
				let index = listArray.indexOf(name);
				listArray.splice(index, 1);
			} else {
				console.log(`${name} is not in the list!`);
			}
		}
	}
	console.log(listArray.join("\n"));
}
houseParty([
	"Allie is going!",
	"George is going!",
	"John is not going!",
	"George is not going!",
]);
houseParty([
	"Tom is going!",
	"Annie is going!",
	"Tom is going!",
	"Garry is going!",
	"Jerry is going!",
]);
