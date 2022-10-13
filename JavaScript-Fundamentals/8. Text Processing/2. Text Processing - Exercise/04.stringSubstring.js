function stringSubstring(word, text) {

	let sentenceArr = text.split(' ');
	for (let element of sentenceArr) {
		if (element.toLowerCase() === word.toLowerCase()) {
			console.log(word)
			return
		}
	}
	console.log(`${word} not found!`);
}
stringSubstring('javascript',
	'JavaScript is the best programming language')
stringSubstring('python',
	'JavaScript is the best programming language')	