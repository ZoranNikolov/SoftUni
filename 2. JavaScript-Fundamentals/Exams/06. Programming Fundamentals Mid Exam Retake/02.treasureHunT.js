function treasureHunt(input) {
	let chest = input.shift().split("|");

	for (const line of input) {
		if (line === "Yohoho!") {
			break;
		}

		let tokens = line.split(" ");
		let command = tokens.shift();

		switch (command) {
			case "Loot":
				tokens.forEach((item) => {
					if (!chest.includes(item)) {
						chest.unshift(item);
					}
				});
				break;
			case "Drop":
				let index = tokens[0];
				if (index >= 0 && index < chest.length) {
					let index = Number(tokens[0]);
					let tempItem = chest[index];
					chest.splice(index, 1);
					chest.push(tempItem);
				}
				break;
			case "Steal":
				let count = Number(tokens[0]);
				if (count > chest.length) {
					count = chest.length;
				}
				chest = chest.reverse();
				let stolenItems = chest.slice(0, count);
				chest.splice(0, count);
				chest = chest.reverse();
				console.log(stolenItems.reverse().join(", "));
				break;
		}
	}

	if (chest.length === 0) {
		console.log("Failed treasure hunt.");
	} else {
		let sum = 0;
		chest.forEach((item) => {
			sum += item.length;
		});
		let avg = sum / chest.length;
		console.log(`Average treasure gain: ${avg.toFixed(2)} pirate credits.`);
	}
}
treasureHunt([
	"Gold|Silver|Bronze|Medallion|Cup",
	"Loot Wood Gold Coins",
	"Loot Silver Pistol",
	"Drop 3",
	"Steal 3",
	"Yohoho!",
]);
treasureHunt([
	"Diamonds|Silver|Shotgun|Gold",
	"Loot Silver Medals Coal",
	"Drop -1",
	"Drop 1",
	"Steal 6",
	"Yohoho!",
]);
