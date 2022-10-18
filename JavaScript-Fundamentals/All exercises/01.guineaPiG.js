function guineaPiG(input) {

	let [food, hay, cover, weight] = input.map(Number).map(x => x * 1000)
	let days = 1
	let isShortage = false

	while (days <= 30) {

		food -= 300;
		if (days % 2 == 0) {
			hay -= food * 0.05
		}

		if (days % 3 === 0) {
			cover -= weight / 3
		}

		if (food <= 0 || hay <= 0 || cover <= 0) {
			isShortage = true
			break
		}
		days++
	}
	
	food /= 1000;
	hay /= 1000;
	cover /= 1000;

	isShortage ?
		console.log('Merry must go to the pet store!') :
		console.log(`Everything is fine! Puppy is happy! Food: ${food.toFixed(2)}, Hay: ${hay.toFixed(2)}, Cover: ${cover.toFixed(2)}.`);

}
guineaPiG(["10", "5", "5.2", "1"])
// guineaPiG(["1", "1.5", "3", "1.5"])