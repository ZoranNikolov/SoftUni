function spaceTravel(input) {
	let travelInfoArr = input.shift().split("||");
	let fuel = Number(input.shift());
	let ammo = Number(input.shift());

	for (const line of travelInfoArr) {
		if (line === "Titan") {
			return console.log("You have reached Titan, all passengers are safe.");
		}

		let tokens = line.split(" ");
		let command = tokens.shift();
		let int = Number(tokens.shift());

		switch (command) {
			case "Travel":
				if (fuel - int >= 0) {
					fuel -= int;
					console.log(`The spaceship travelled ${int} light-years.`);
				} else {
					return console.log("Mission failed.");
				}
				break;
			case "Enemy":
				if (ammo >= int) {
					ammo -= int;
					console.log(`An enemy with ${int} armour is defeated.`);
				} else {
					if (fuel - int * 2 > 0) {
						fuel -= int * 2;
						console.log(`An enemy with ${int} armour is outmaneuvered.`);
					} else {
						return console.log("Mission failed.");
					}
				}
				break;
			case "Repair":
				fuel += int;
				ammo += int * 2;
				console.log(`Ammunitions added: ${int * 2}.`);
				console.log(`Fuel added: ${int}.`);
				break;
		}
	}
}
// spaceTravel(["Travel 10||Enemy 30||Repair 15||Titan", "50", "80"]);
spaceTravel(["Travel 20||Enemy 50||Enemy 50||Enemy 10||Repair 15||Enemy 50||Titan", "60", "100"]);
