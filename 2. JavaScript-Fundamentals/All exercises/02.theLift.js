function theLift(input) {

	let queue = Number(input[0])
	let lift = input[1].split(' ').map(Number)
	let peopleToAddFromQueue = 0

	for (let i = 0; i < lift.length; i++) {
		let wagon = lift[i]

		if (wagon < 4) {

			let freeSeats = 4 - wagon

			freeSeats > queue ?
				peopleToAddFromQueue = queue :
				peopleToAddFromQueue = (queue - (queue - freeSeats))

			lift[i] = wagon + peopleToAddFromQueue
			queue -= peopleToAddFromQueue
		}

		if (queue === 0) {
			break
		}
	}

	let peopleInLift = lift.reduce((a, b) => a + b, 0)
	let liftCapacity = lift.length * 4

	if (peopleInLift < liftCapacity && queue === 0) {
		console.log(`The lift has empty spots!\n${lift.join(' ')}`)
	} else if (peopleInLift === liftCapacity && queue > 0) {
		console.log(`There isn't enough space! ${queue} people in a queue!\n${lift.join(' ')}`);
	} else if (peopleInLift === liftCapacity && queue === 0) {
		console.log(lift.join(' '));
	}
}
theLift(["0", "0 0 0 0 4"])
// theLift(["20", "0 2 0"])
// theLift(["12", "0 0 0"])