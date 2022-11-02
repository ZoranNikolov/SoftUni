function memoryGame(input) {

	let sequenceOfElements = input.shift().split(' ');
	let isWinner = false;
	let turns = 0;

	for (let i = 0; i < input.length; i++) {

		let line = input[i]

		if (line === 'end') {
			break;
		}

		let [firstIndex, secondIndex] = line.split(' ').map(Number)
		let firstElement = sequenceOfElements[firstIndex]
		let secondElement = sequenceOfElements[secondIndex]

		if ((firstIndex === secondIndex) ||
			(firstIndex < 0 || firstIndex > sequenceOfElements.length - 1 ||
				secondIndex < 0 || secondIndex > sequenceOfElements.length - 1)) {
			console.log('Invalid input! Adding additional elements to the board');
			turns = i + 1
			let elementToAdd = `-${turns}a`
			let indexToAdd = sequenceOfElements.length / 2
			sequenceOfElements.splice(indexToAdd, 0, elementToAdd, elementToAdd)
		} else if (firstElement === secondElement) {
			console.log(`Congrats! You have found matching elements - ${firstElement}!`);
			sequenceOfElements.splice(sequenceOfElements.indexOf(firstElement), 1)
			sequenceOfElements.splice(sequenceOfElements.indexOf(firstElement), 1)
		} else {
			console.log('Try again!');
		}

		if (sequenceOfElements.length === 0) {
			isWinner = true;
			turns = i + 1
			break
		}
	}

	isWinner ?
		console.log(`You have won in ${turns} turns!`) :
		console.log(`Sorry you lose :(\n${sequenceOfElements.join(' ')}`);
}
memoryGame(["1 1 2 2 3 3 4 4 5 5",
	"1 0",
	"-1 0",
	"1 0",
	"1 0",
	"1 0",
	"end"])
// memoryGame(["a 2 4 a 2 4",
// 	"0 3",
// 	"0 2",
// 	"0 1",
// 	"0 1",
// 	"end"])
// memoryGame(["a 2 4 a 2 4",
// 	"4 0",
// 	"0 2",
// 	"0 1",
// 	"0 1",
// 	"end"])