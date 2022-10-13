function lettersChangeNumbers(string) {
	let arrOfString = getSplittedString(string)
	let alphabet = {
		a: 1,
		b: 2,
		c: 3,
		d: 4,
		e: 5,
		f: 6,
		g: 7,
		h: 8,
		i: 9,
		j: 10,
		k: 11,
		l: 12,
		m: 13,
		n: 14,
		o: 15,
		p: 16,
		q: 17,
		r: 18,
		s: 19,
		t: 20,
		u: 21,
		v: 22,
		w: 23,
		x: 24,
		y: 25,
		z: 26
	}

	for (const el of arrOfString) {
		let charBefore = el.substring(0,1)
		let charAfter = el.substring()
		let num = Number(el)
		console.log(charBefore, charAfter, num);
	}

	function getSplittedString(stringToSplit) {
		for (let i = 0; i < string.length; i++) {
			let currentChar = string[i]
			let nextChar = string[i + 1]
			if (currentChar === ' ' && nextChar === ' ') {
				string = string.replace('  ', ' ')
				i--
			}
		}
		return string.split(' ')
	}
}
lettersChangeNumbers('A12b s17G')
// lettersChangeNumbers('P34562Z q2576f     H456z')
// lettersChangeNumbers('a1A')