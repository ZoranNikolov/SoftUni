function needForSpeed(input) {
	let carsCount = Number(input.shift());
	let result = new Map();

	for (const element of input) {
		if (element === "Stop") {
			break;
		}

		if (element.includes("|")) {
			let [car, mileage, fuel] = element.split("|");

			result.set(car, []);
			result.get(car).push(Number(mileage));
			result.get(car).push(Number(fuel));
		}

		if (element.includes(" : ")) {
			let tokens = element.split(" : ");

			if (element.includes("Refuel")) {
				let givenCar = tokens[1];
				let givenFuel = Number(tokens[2]);

				let sum = givenFuel + result.get(givenCar)[1];

				if (sum > 75) {
					result.get(givenCar)[1] = 75;
					sum -= 75;
					console.log(
						`${givenCar} refueled with ${givenFuel - sum} liters`
					);
				} else {
					result.get(givenCar)[1] = sum;
					console.log(
						`${givenCar} refueled with ${givenFuel} liters`
					);
				}
			} else if (element.includes("Revert")) {
				let givenCar = tokens[1];
				let kilometers = Number(tokens[2]);

				result.get(givenCar)[0] -= kilometers;

				if (result.get(givenCar)[0] < 10000) {
					result.get(givenCar)[0] = 10000;
				} else {
					console.log(
						`${givenCar} mileage decreased by ${kilometers} kilometers`
					);
				}
			} else if (element.includes("Drive")) {
				let givenCar = tokens[1];
				let distance = Number(tokens[2]);
				let givenFuel = Number(tokens[3]);

				if (givenFuel <= result.get(givenCar)[1]) {
					result.get(givenCar)[1] -= givenFuel;
					result.get(givenCar)[0] += distance;
					console.log(
						`${givenCar} driven for ${distance} kilometers. ${givenFuel} liters of fuel consumed.`
					);
				} else {
					console.log("Not enough fuel to make that ride");
				}

				if (result.get(givenCar)[0] >= 100000) {
					result.delete(givenCar);
					console.log(`Time to sell the ${givenCar}!`);
				}
			}
		}
	}
	for (const [car, carInfo] of result) {
		console.log(
			`${car} -> Mileage: ${carInfo[0]} kms, Fuel in the tank: ${carInfo[1]} lt.`
		);
	}
}
needForSpeed([
	"3",
	"Audi A6|38000|62",
	"Mercedes CLS|11000|35",
	"Volkswagen Passat CC|45678|5",
	"Drive : Audi A6 : 543 : 47",
	"Drive : Mercedes CLS : 94 : 11",
	"Drive : Volkswagen Passat CC : 69 : 8",
	"Refuel : Audi A6 : 50",
	"Revert : Mercedes CLS : 500",
	"Revert : Audi A6 : 30000",
	"Stop",
]);
