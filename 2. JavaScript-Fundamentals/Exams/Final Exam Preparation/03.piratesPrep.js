function pirates(input) {
	let cities = {};
	let line = input.shift();

	while (line != "Sail") {
		let [city, population, gold] = line.split("||");
		if (!cities.hasOwnProperty(city)) {
			cities[city] = {
				population: Number(population),
				gold: Number(gold),
			};
		} else {
			cities[city].population += Number(population);
			cities[city].gold += Number(gold);
		}
		line = input.shift();
	}

	let commandParser = {
		Plunder(cities, city, people, gold) {
			people = Number(people);
			gold = Number(gold);
			
			return cities;
		},
	};

	for (const line of input) {
		if (line === "End") {
			break;
		}
	}
}

pirates([
	"Tortuga||345000||1250",
	"Santo Domingo||240000||630",
	"Havana||410000||1100",
	"Sail",
	"Plunder=>Tortuga=>75000=>380",
	"Prosper=>Santo Domingo=>180",
	"End",
]);
