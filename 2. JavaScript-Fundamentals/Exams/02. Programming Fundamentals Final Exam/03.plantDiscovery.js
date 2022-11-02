function plantDiscovery(input) {
	let num = Number(input.shift());
	let plants = {};

	for (let i = 0; i < num; i++) {
		let [plant, rarity] = input.shift().split("<->");
		plants[plant] = {};
		plants[plant][rarity] = [];
	}

	let commandParser = {
		Rate: (plants, tokens) => {
			let [plantToRate, rating] = tokens.split(" - ");
			if (plants.hasOwnProperty(plantToRate)) {
				rating = Number(rating);
				for (const [key, value] of Object.entries(plants[plantToRate])) {
					plants[plantToRate][key].push(rating);
				}
			} else {
				console.log("error");
			}
			return plants;
		},
		Update: (plants, tokens) => {
			let [plantToUpdate, newRarity] = tokens.split(" - ");

			if (plants.hasOwnProperty(plantToUpdate)) {
				let tempRating;
				for (const [key, value] of Object.entries(plants[plantToUpdate])) {
					tempRating = plants[plantToUpdate][key];
				}
				plants[plantToUpdate] = {};
				plants[plantToUpdate][newRarity] = tempRating;
			} else {
				console.log("error");
			}
			return plants;
		},
		Reset: (plants, tokens) => {
			let plantToReset = tokens;
			if (plants.hasOwnProperty(plantToReset)) {
				for (const [key, value] of Object.entries(plants[plantToReset])) {
					plants[plantToReset][key] = [];
				}
			} else {
				console.log("error");
			}
			return plants;
		},
	};

	input.forEach((line) => {
		if (line !== "Exhibition") {
			let [command, tokens] = line.split(": ");
			plants = commandParser[command](plants, tokens);
		}
	});

	console.log("Plants for the exhibition:");

	for (const plant of Object.keys(plants)) {
		let avgRating = 0;
		for (const [rarity, rating] of Object.entries(plants[plant])) {
			if (rating.length > 0) {
				avgRating = rating.reduce((a, b) => a + b, 0) / rating.length;
			}
			console.log(`- ${plant}; Rarity: ${rarity}; Rating: ${avgRating.toFixed(2)}`);
		}
	}
}
plantDiscovery([
	"3",
	"Arnoldii<->4",
	"Woodii<->7",
	"Welwitschia<->2",
	"Rate: Woodii - 10",
	"Rate: Welwitschia - 7",
	"Rate: Arnoldii - 3",
	"Rate: Woodii - 5",
	"Update: Woodii - 5",
	"Reset: Arnoldii",
	"Exhibition",
]);
plantDiscovery([
	"2",
	"Candelabra<->10",
	"Oahu<->10",
	"Rate: Oahu - 7",
	"Rate: Candelabra - 6",
	"Exhibition",
]);
