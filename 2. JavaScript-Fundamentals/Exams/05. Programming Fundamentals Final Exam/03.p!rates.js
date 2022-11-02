function pirates(input) {
	let cities = {};
	let currentToken = input.shift();

	while (currentToken !== "Sail") {
		let [city, population, gold] = currentToken.split("||");
		population = Number(population);
		gold = Number(gold);

		if (cities.hasOwnProperty(city)) {
			cities[city].population += population;
			cities[city].gold += gold;
		} else {
			cities[city] = {
				population: population,
				gold: gold,
			};
		}
		currentToken = input.shift();
	}

	let commandParser = {
		Plunder(cities, townPlundered, peopleKilled, goldPlundered) {
			peopleKilled = Number(peopleKilled);
			goldPlundered = Number(goldPlundered);

			console.log(
				`${townPlundered} plundered! ${goldPlundered} gold stolen, ${peopleKilled} citizens killed.`
			);

			cities[townPlundered].population -= peopleKilled;
			cities[townPlundered].gold -= goldPlundered;

			if (cities[townPlundered].population <= 0 || cities[townPlundered].gold <= 0) {
				console.log(`${townPlundered} has been wiped off the map!`);
				delete cities[townPlundered];
			}
			return cities;
		},
		Prosper(cities, townProspered, goldProspered) {
			goldProspered = Number(goldProspered);

			if (goldProspered >= 0) {
				cities[townProspered].gold += goldProspered;
				console.log(
					`${goldProspered} gold added to the city treasury. ${townProspered} now has ${cities[townProspered].gold} gold.`
				);
			} else {
				console.log("Gold added cannot be a negative number!");
			}
			return cities;
		},
	};

	input.forEach((line) => {
		if (line !== "End") {
			let [command, ...tokens] = line.split("=>");
			cities = commandParser[command](cities, ...tokens);
		}
	});

	let citiesLeftCount = Object.keys(cities).length;

	if (citiesLeftCount > 0) {
		console.log(`Ahoy, Captain! There are ${citiesLeftCount} wealthy settlements to go to:`);

		for (const city in cities) {
			console.log(
				`${city} -> Population: ${cities[city].population} citizens, Gold: ${cities[city].gold} kg`
			);
		}
	} else {
		console.log("Ahoy, Captain! All targets have been plundered and destroyed!");
	}
}
// pirates([
// 	"Tortuga||345000||1250",
// 	"Santo Domingo||240000||630",
// 	"Havana||410000||1100",
// 	"Sail",
// 	"Plunder=>Tortuga=>75000=>380",
// 	"Prosper=>Santo Domingo=>180",
// 	"End",
// ]);
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
