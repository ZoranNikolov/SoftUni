function starEnigma(string) {

	let numberMessages = Number(string.shift());
	let planets = [];
	let patternStar = /[star]/g;

	for (let command of string) {
		let counter = 0;
		let splitArray = command.split("");
		for (let i = 0; i < splitArray.length; i++) {
			let currentChar = splitArray[i].toLowerCase();
			if (currentChar.match(patternStar)) {
				counter++;
			}
		}

		for (let i = 0; i < splitArray.length; i++) {
			let charCode = splitArray[i].charCodeAt(0);
			let result = String.fromCharCode(charCode - counter);
			splitArray[i] = result;
		}

		let finalString = splitArray.join("");
		planets.push(finalString)
	}

	let attackedCount = 0;
	let attackedPlanets = [];
	let destroyedCount = 0;
	let destroyedPlanets = [];
	let patternPlanetMessage = /@(?<name>[A-Za-z]+)[^@:!\->]*:(?<population>\d+)[^@:!\->]*!(?<command>[A|D])![^@:!\->]*\->(?<soldier>\d+)/g;

	let planetInfo = patternPlanetMessage.exec(planets);

	while (planetInfo !== null) {
		let name = planetInfo.groups['name'];
		let attackCommand = planetInfo.groups['command'];

		switch (attackCommand) {
			case "A":
				attackedCount++
				attackedPlanets.push(name);
				break;

			case "D":
				destroyedCount++;
				destroyedPlanets.push(name);
				break;
		}

		planetInfo = patternPlanetMessage.exec(planets);
	}

	attackedPlanets.sort((a, b) => a.localeCompare(b));
	destroyedPlanets.sort((a, b) => a.localeCompare(b));

	console.log(`Attacked planets: ${attackedCount}`);
	if (attackedPlanets.length > 0) {
		for (let planet of attackedPlanets) {
			console.log(`-> ${planet}`);
		}
	}
	console.log(`Destroyed planets: ${destroyedCount}`);
	if (destroyedPlanets.length > 0) {
		for (let planet of destroyedPlanets) {
			console.log(`-> ${planet}`);
		}
	}
}
starEnigma(['2',
	'STCDoghudd4=63333$D$0A53333',
	'EHfsytsnhf?8555&I&2C9555SR'])