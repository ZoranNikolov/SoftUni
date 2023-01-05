function carFactory(data) {
	let res = {};
	res.model = data.model;

	let engineEnum = {
		"Small engine": { power: 90, volume: 1800 },
		"Normal engine": { power: 120, volume: 2400 },
		"Monster engine": { power: 200, volume: 3500 },
	};

	let carriageEnum = {
		hatchback(color) {
			return {
				type: "hatchback",
				color,
			};
		},
		coupe(color) {
			return {
				type: "coupe",
				color,
			};
		},
	};

	if (data.power <= 90) {
		res.engine = engineEnum["Small engine"];
	} else if (data.power <= 120) {
		res.engine = engineEnum["Normal engine"];
	} else {
		res.engine = engineEnum["Monster engine"];
	}

	res["carriage"] = carriageEnum[data.carriage](data.color);

	let size = data.wheelsize % 2 === 0 ? data.wheelsize - 1 : data.wheelsize;

	res.wheels = new Array(4).fill(size);
	return res;
}
carFactory({
	model: "VW Golf II",
	power: 90,
	color: "blue",
	carriage: "hatchback",
	wheelsize: 14,
});
