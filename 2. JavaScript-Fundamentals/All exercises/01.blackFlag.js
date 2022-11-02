function blackFlag(input) {
	let [days, plunderPerDay, expecedPlunder] = (input = input.map(Number));
	let totalPlunder = 0;

	for (let day = 1; day <= days; day++) {
		totalPlunder += plunderPerDay;

		if (day % 3 === 0) {
			totalPlunder += plunderPerDay * 0.5;
		}

		if (day % 5 === 0) {
			totalPlunder *= 0.7;
		}
	}

	totalPlunder >= expecedPlunder
		? console.log(`Ahoy! ${totalPlunder.toFixed(2)} plunder gained.`)
		: console.log(
				`Collected only ${((totalPlunder / expecedPlunder) * 100).toFixed(
					2
				)}% of the plunder.`
		  );
}
blackFlag(["5", "40", "100"]);
blackFlag(["10", "20", "380"]);
