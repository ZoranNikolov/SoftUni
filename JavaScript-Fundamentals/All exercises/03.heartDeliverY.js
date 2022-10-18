function heartDelivery(params) {

	let neighborhood = params.shift().split('@').map(Number)
	let index = 0;

	for (const line of params) {

		if (line === 'Love!') {
			break
		}

		let length = Number(line.split(' ')[1])
		index += length

		if (index > neighborhood.length - 1) {
			index = 0
		}

		neighborhood[index] -= 2

		if (neighborhood[index] === 0) {
			console.log(`Place ${index} has Valentine's day.`);
		} else if (neighborhood[index] < 0) {
			neighborhood[index] = 0;
			console.log(`Place ${index} already had Valentine's day.`);
		}
	}

	console.log(`Cupid's last position was ${index}.`);

	if (neighborhood.reduce((a, b) => a + b, 0) === 0) {
		console.log('Mission was successful.')
	} else {
		let leftHouses = neighborhood.filter(x => {
			if (x > 0) {
				return x
			}
		}).length
		console.log(`Cupid has failed ${leftHouses} places.`);
	}
}
heartDelivery(["10@10@10@2",
	"Jump 1",
	"Jump 2",
	"Love!"])
heartDelivery(["2@4@2",
	"Jump 2",
	"Jump 2",
	"Jump 8",
	"Jump 3",
	"Jump 1",
	"Love!"])