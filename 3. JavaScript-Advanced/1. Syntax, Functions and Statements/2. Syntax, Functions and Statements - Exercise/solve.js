function bestPlayer(input) {
	let index = 0;
	let command = input[index];
	let bestGoals = Number.MIN_SAFE_INTEGER;
	let bestPlayer = "";

	while (command !== "END") {
		let currentName = command;
		index++;
		let currentGoals = Number(input[index]);

		if (currentGoals > bestGoals) {
			bestGoals = currentGoals;
			bestPlayer = currentName;
		}

		if (bestGoals >= 10) {
			break;
		}
		index++;
		command = input[index];
	}
	console.log(`${bestPlayer} is the best player!`);

	if (bestGoals >= 3) {
		console.log(
			`He has scored ${bestGoals} goals and made a hat-trick !!!`
		);
	} else if (bestGoals < 3) {
		console.log(`He has scored ${bestGoals} goals.`);
	}
}
bestPlayer([1])