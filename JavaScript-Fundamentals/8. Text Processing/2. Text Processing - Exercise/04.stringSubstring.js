function stringSubstring(word, text) {

	let sentenceArr = text.split(' ');
	let isChecked = false;
	for (let element of sentenceArr) {
		let wordLower = element.toLowerCase();
		if (wordLower === word) {
			isChecked = true;
		}
	}
	isChecked ?
		console.log(word) :
		console.log(`${word} not found!`);

}
stringSubstring('javascript',
	'JavaScript is the best programming language')
stringSubstring('python',
	'JavaScript is the best programming language')	