function townPopulation(townData) {
	
	let townInfoObj = townData
		.map((line) => {
			let data = line.split(" <-> ");
			return {
				name: data[0],
				population: Number(data[1]),
			};
		})
		.reduce((result, town) => {
			if (!result.hasOwnProperty(town.name)) {
				result[town.name] = town.population;
			} else {
				result[town.name] += town.population;
			}
			return result;
		}, {});

	for (const key in townInfoObj) {
		console.log(`${key} : ${townInfoObj[key]}`);
	}
}
townPopulation([
	"Sofia <-> 1200000",
	"Montana <-> 20000",
	"New York <-> 10000000",
	"Washington <-> 2345000",
	"Las Vegas <-> 1000000",
]);
