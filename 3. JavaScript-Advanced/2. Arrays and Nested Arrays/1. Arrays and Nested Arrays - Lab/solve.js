function foodForPet(input) {
	let index = 0;
	let days = Number(input[index]);
	index++;
	let allFood = Number(input[index]);
	index++;

	let biscuits = 0;
	let sum = 0;

	let allDog = 0;
	let allCat = 0;

	for (let day = 1; day <= days; day++) {
		let dogFood = Number(input[index]);
		index++;
		allDog += dogFood;
		let catFood = Number(input[index]);
		index++;
		allCat += catFood;

		sum += dogFood + catFood;

		if (day % 3 === 0) {
			biscuits += (10 / 100) * (dogFood + catFood);
		}
	}

	console.log(`Total eaten biscuits: ${biscuits.toFixed()}gr.`);
	console.log(
		`${((sum / allFood) * 100).toFixed(2)}% of the food has been eaten.`
	);
	console.log(`${((allDog / sum) * 100).toFixed(2)}% eaten from the dog.`);
	console.log(`${((allCat / sum) * 100).toFixed(2)}% eaten from the cat.`);
}
foodForPet([3, 1000, 300, 20, 100, 30, 110, 40]);
