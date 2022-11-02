function bonusScoringSystem(input) {

	input = input.map(Number)
	let students = input.shift();
	let lectures = input.shift();
	let intialBonus = input.shift();
	let maxAttendances = 0
	let maxBonus = 0

	for (const line of input) {
		let attendances = line;
		let bonus = (attendances / lectures) * (5 + intialBonus);

		if (bonus >= maxBonus) {
			maxBonus = bonus;
			maxAttendances = attendances
		}
	}

	console.log(`Max Bonus: ${Math.ceil(maxBonus)}.\nThe student has attended ${maxAttendances} lectures.`);

}
bonusScoringSystem(['5', '25', '30', '12', '19', '24', '16', '20'])
bonusScoringSystem(['10', '30', '14', '8', '23', '27', '28', '15', '17', '25', '26', '5', '18'])