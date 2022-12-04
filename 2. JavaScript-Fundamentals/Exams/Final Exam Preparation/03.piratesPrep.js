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
			cities[city].population -= people;
			cities[city].gold -= gold;
			console.log(
				`${city} plundered! ${gold} gold stolen, ${people} citizens killed.`
			);
			if (cities[city].population === 0 || cities[city].gold === 0) {
				delete cities[city];
				console.log(`${city} has been wiped off the map!`);
			}
			return cities;
		},
		Prosper(cities, city, gold) {
			gold = Number(gold);
			if (gold >= 0) {
				cities[city].gold += gold;
				console.log(
					`${gold} gold added to the city treasury. ${city} now has ${cities[city].gold} gold.`
				);
			} else {
				console.log("Gold added cannot be a negative number!");
			}
			return cities;
		},
	};

	for (const line of input) {
		if (line === "End") {
			break;
		}

		let [command, ...tokens] = line.split("=>");
		cities = commandParser[command](cities, ...tokens);
	}

	if (Object.entries(cities).length > 0) {
		console.log(
			`Ahoy, Captain! There are ${
				Object.entries(cities).length
			} wealthy settlements to go to:`
		);
		for (const city in cities) {
			console.log(
				`${city} -> Population: ${cities[city].population} citizens, Gold: ${cities[city].gold} kg`
			);
		}
	} else {
		console.log(
			"Ahoy, Captain! All targets have been plundered and destroyed!"
		);
	}
}
pirates([
	"Nassau||95000||1000",
	"San Juan||930000||1250",
	"Campeche||270000||690",
	"Port Royal||320000||1000",
	"Port Royal||100000||2000",
	"Sail",
	"Prosper=>Port Royal=>-200",
	"Plunder=>Nassau=>94000=>750",
	"Plunder=>Nassau=>1000=>150",
	"Plunder=>Campeche=>150000=>690",
	"End",
]);
