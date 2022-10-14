function race(string) {

	let nameMap = new Map();
	let names = string.shift().split(', ');
	names.forEach(person => {
		nameMap.set(person, 0)
	})
	let letterPattern = /[A-Za-z]+/gm;
	let digitsPattern = /\d/g

	for (let index = 0; index < string.length; index++) {

		let currentLine = string[index];
		if (currentLine === 'end of race') {
			break
		}

		let name = currentLine.match(letterPattern).join('')
		let distance = (currentLine.match(digitsPattern)).reduce((a, b) => {
			return Number(a) + Number(b)
		}, 0)

		if (nameMap.has(name)) {
			let prevDistance = nameMap.get(name)
			prevDistance += distance;
			nameMap.set(name, prevDistance)
		}
	}

	let sortedNames = Array.from(nameMap).sort((a, b) => {
		return b[1] - a[1]
	})

	console.log(`1st place: ${sortedNames[0][0]}`);
	console.log(`2nd place: ${sortedNames[1][0]}`);
	console.log(`3rd place: ${sortedNames[2][0]}`);

}
race(['George, Peter, Bill, Tom',
	'G4e@55or%6g6!68e!!@ ',
	'R1@!3a$y4456@',
	'B5@i@#123ll',
	'G@e54o$r6ge#',
	'7P%et^#e5346r',
	'T$o553m&6',
	'end of race'])