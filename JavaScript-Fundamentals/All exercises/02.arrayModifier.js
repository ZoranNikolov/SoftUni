function arrayModifier(input) {
	let initialArr = input.shift().split(' ').map(Number)
	for (const line of input) {
		let tokens = line.split(' ')
		let command = tokens.shift()
		if (command === 'end') {
			break
		} else {
			let firstIndex = tokens[0]
			let secondIndex = tokens[1]
			let firstOperand = initialArr[firstIndex]
			let secondOperand = initialArr[secondIndex]
			switch (command) {
				case 'swap':
					initialArr.splice(firstIndex, 1, secondOperand)
					initialArr.splice(secondIndex, 1, firstOperand)
					break
				case 'multiply':
					initialArr[firstIndex] = firstOperand * secondOperand
					break
				case 'decrease':
					initialArr = initialArr.map(el => el - 1)
					break
			}
		}
	}
	console.log(initialArr.join(', '));
}
arrayModifier([
	'1 2 3 4',
	'swap 0 1',
	'swap 1 2',
	'swap 2 3',
	'multiply 1 2',
	'decrease',
	'end'])