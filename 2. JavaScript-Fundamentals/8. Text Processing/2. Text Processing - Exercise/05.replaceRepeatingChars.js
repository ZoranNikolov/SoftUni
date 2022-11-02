function replaceRepeatingChars(string) {
	let newStr = ''
	for (let i = 0; i < string.length; i++) {
		let currentChar = string[i];
		let nextChar = string[i + 1];

		if (currentChar !== nextChar) {
			newStr += currentChar
		}
	}
	console.log(newStr);
}
replaceRepeatingChars('aaaaabbbbbcdddeeeedssaa')