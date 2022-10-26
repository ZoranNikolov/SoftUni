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
			rating = Number(rating);
			for (const [key, value] of Object.entries(plants[plantToRate])) {
				plants[plantToRate][key].push(rating);
				console.log(plants[plantToRate][key]);
			}
			return plants;
		},
		Update: (plants, tokens) => {
            
        },
		Reset: (plants, tokens) => {},
	};

	input.forEach((line) => {
		if (line !== "Exhibition") {
			let [command, tokens] = line.split(": ");
			// console.log(command);
			plants = commandParser[command](plants, tokens);
		}
	});
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
