function solve(input) {
	let journal = input.shift().split(", ");

	for (const line of input) {
		let tokens = line.split(" - ");
		let command = tokens.shift();
		if (command === "Craft!") {
			break;
		}
		switch (command) {
			case "Collect":
				let collectItem = tokens.shift();
				if (!journal.includes(collectItem)) {
					journal.push(collectItem);
				}
				break;
			case "Drop":
				let droppedItem = tokens.shift();
				let indexDrop = journal.indexOf(droppedItem);
				if (journal[indexDrop]) {
					journal.splice(indexDrop, 1);
				}
				break;
			case "Combine Items":
				let [oldItem, newItem] = tokens.shift().split(":");
				if (journal.includes(oldItem)) {
					let indexCombined = journal.indexOf(oldItem);
					journal.splice(indexCombined + 1, 0, newItem);
				}
				break;
			case "Renew":
				let renewItem = tokens.shift();
				if (journal.includes(renewItem)) {
					journal.splice(journal.indexOf(renewItem), 1);
					journal.push(renewItem);
				}
				break;
		}
	}
	console.log(journal.join(", "));
}
solve(["Iron, Wood, Sword", "Collect - Gold", "Drop - Wood", "Craft!"]);
solve(["Iron, Sword", "Drop - Bronze", "Combine Items - Sword:Bow", "Renew - Iron", "Craft!"]);
