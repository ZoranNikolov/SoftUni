function shootForTheWin(input) {

	let targets = input.shift().split(' ').map(Number)
	let counter = 0;

	for (const line of input) {

		if (line === 'End') {
			console.log(`Shot targets: ${counter} -> ${targets.join(' ')}`);
			break
		}

		let index = Number(line);

		if (index >= 0 && index < targets.length) {
			let currentTarget = targets[index]
			targets = targets.map(x => {
				if (x === -1) {
					return x = -1
				} else if (x > currentTarget) {
					return x -= currentTarget
				} else {
					return x += currentTarget
				}
			})
			targets[index] = -1
			counter++
		}
	}
}
shootForTheWin(["24 50 36 70", "0", "4", "3", "1", "End"])
shootForTheWin(["30 30 12 60 54 66", "5", "2", "4", "0", "End"])