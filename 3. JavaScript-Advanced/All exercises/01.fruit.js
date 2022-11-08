function fruit(fruit, weight, pricePerKg) {
	weight /= 1000;
	console.log(
		`I need $${(weight * pricePerKg).toFixed(2)} to buy ${weight.toFixed(
			2
		)} kilograms ${fruit}.`
	);
}
fruit("orange", 2500, 1.8);
