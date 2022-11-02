function countStringOccurrences(string, word) {

	let words = string.split(' ')
	let counter = 0;
	for (const el of words) {
		if (el === word) {
			counter++
		}
	}
	console.log(counter);
}
countStringOccurrences('This is a word and it also is a sentence', 'is')