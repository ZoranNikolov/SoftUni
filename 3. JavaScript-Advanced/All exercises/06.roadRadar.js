function roadRadar(speed, area) {
	let areaLimit = {
		motorway: 130,
		interstate: 90,
		city: 50,
		residential: 20,
	};

	if (speed <= areaLimit[area]) {
		console.log(`Driving ${speed} km/h in a ${areaLimit[area]} zone`);
	} else {
		let diff = speed - areaLimit[area];
		let status = (diff) => {
			if (diff <= 20) {
				return "speeding";
			} else if (diff <= 40) {
				return "excessive speeding";
			} else {
				return "reckless driving";
			}
		};
		console.log(
			`The speed is ${diff} km/h faster than the allowed speed of ${
				areaLimit[area]
			} - ${status(diff)}`
		);
	}
}
roadRadar(40, "city");
roadRadar(21, "residential");
roadRadar(120, "interstate");
roadRadar(200, "motorway");
