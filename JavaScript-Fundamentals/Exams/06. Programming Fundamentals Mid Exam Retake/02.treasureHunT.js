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
				break;
			case "Steal":
				break;
		}
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
// treasureHunt([
// 	"Diamonds|Silver|Shotgun|Gold",
// 	"Loot Silver Medals Coal",
// 	"Drop -1",
// 	"Drop 1",
// 	"Steal 6",
// 	"Yohoho!",
// ]);
