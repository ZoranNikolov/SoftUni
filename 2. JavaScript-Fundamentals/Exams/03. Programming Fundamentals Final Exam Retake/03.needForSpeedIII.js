function NFS(input) {
	let cars = {};

	let numberOfCars = Number(input.shift());
	for (let i = 0; i < numberOfCars; i++) {
		let [car, mileage, fuel] = input.shift().split("|");
		cars[car] = {};
		cars[car]["mileage"] = Number(mileage);
		cars[car]["fuel"] = Number(fuel);
	}

	let commandParser = {
		Drive(cars, car, distance, fuel) {
			distance = Number(distance);
			fuel = Number(fuel);

			if (cars[car]["fuel"] - fuel >= 0) {
				cars[car]["mileage"] += distance;
				cars[car]["fuel"] -= fuel;
				console.log(
					`${car} driven for ${distance} kilometers. ${fuel} liters of fuel consumed.`
				);
			} else {
				console.log("Not enough fuel to make that ride");
			}

			if (cars[car]["mileage"] >= 100000) {
				delete cars[car];
				console.log(`Time to sell the ${car}!`);
			}

			return cars;
		},
		Refuel(cars, car, fuelRefill) {
			fuelRefill = Number(fuelRefill);

			if (cars[car]["fuel"] + fuelRefill > 75) {
				fuelRefill = 75 - cars[car]["fuel"];
			}

			cars[car]["fuel"] += fuelRefill;
			console.log(`${car} refueled with ${fuelRefill} liters`);

			return cars;
		},
		Revert(cars, car, kilometers) {
			kilometers = Number(kilometers);
			cars[car]["mileage"] -= kilometers;

			if (cars[car]["mileage"] < 10000) {
				cars[car]["mileage"] = 10000;
			} else {
				console.log(`${car} mileage decreased by ${kilometers} kilometers`);
			}

			return cars;
		},
	};

	input.forEach((line) => {
		if (line !== "Stop") {
			let [command, ...tokens] = line.split(" : ");
			cars = commandParser[command](cars, ...tokens);
		}
	});

	for (const car in cars) {
		console.log(
			`${car} -> Mileage: ${cars[car]["mileage"]} kms, Fuel in the tank: ${cars[car]["fuel"]} lt.`
		);
	}
}
// NFS([
// 	"3",
// 	"Audi A6|38000|62",
// 	"Mercedes CLS|11000|35",
// 	"Volkswagen Passat CC|45678|5",
// 	"Drive : Audi A6 : 543 : 47",
// 	"Drive : Mercedes CLS : 94 : 11",
// 	"Drive : Volkswagen Passat CC : 69 : 8",
// 	"Refuel : Audi A6 : 50",
// 	"Revert : Mercedes CLS : 500",
// 	"Revert : Audi A6 : 30000",
// 	"Stop",
// ]);
NFS([
	"4",
	"Lamborghini Veneno|11111|74",
	"Bugatti Veyron|12345|67",
	"Koenigsegg CCXR|67890|12",
	"Aston Martin Valkryie|99900|50",
	"Drive : Koenigsegg CCXR : 382 : 82",
	"Drive : Aston Martin Valkryie : 99 : 23",
	"Drive : Aston Martin Valkryie : 2 : 1",
	"Refuel : Lamborghini Veneno : 40",
	"Revert : Bugatti Veyron : 2000",
	"Stop",
]);
