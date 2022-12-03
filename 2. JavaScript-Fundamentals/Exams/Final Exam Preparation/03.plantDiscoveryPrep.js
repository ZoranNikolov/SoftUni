function plantDiscovery(input) {
	let plants = {};
	let n = Number(input.shift());

	for (let i = 0; i < n; i++) {
		let [name, rarity] = input.shift().split("<->");
		plants[name] = {
			rarity: Number(rarity),
			ratingArr: [],
		};
	}

	let commandParser = {
		Rate(plants, plant, rating) {
			if (plants.hasOwnProperty(plant)) {
				plants[plant].ratingArr.push(rating);
			} else {
				console.log("error");
			}
			return plants;
		},
		Update(plants, plant, rarity) {
			if (plants.hasOwnProperty(plant)) {
				plants[plant].rarity = rarity;
			} else {
				console.log("error");
			}
			return plants;
		},
		Reset(plants, plant) {
			if (plants.hasOwnProperty(plant)) {
				plants[plant].ratingArr = [];
			} else {
				console.log("error");
			}
			return plants;
		},
	};

	for (let line of input) {
		if (line === "Exhibition") {
			break;
		}
		let [command, tokens] = line.split(": ");
		if (tokens.length > 1) {
			tokens = tokens.split(" - ");
			tokens[1] = Number(tokens[1]);
		}
		plants = commandParser[command](plants, ...tokens);
	}

	console.log("Plants for the exhibition:");

	for (const plant in plants) {
		let avgRating =
			plants[plant].ratingArr.length !== 0
				? plants[plant].ratingArr.reduce((acc, val) => acc + val, 0) /
				  plants[plant].ratingArr.length
				: 0;
		console.log(
			`- ${plant}; Rarity: ${
				plants[plant].rarity
			}; Rating: ${avgRating.toFixed(2)}`
		);
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
