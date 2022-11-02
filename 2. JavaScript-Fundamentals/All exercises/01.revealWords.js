function revealWords(words, sentence) {

	let wordsToReveal = words.split(', ')
	let sentenceToReveal = sentence.split(' ')

	for (let key of wordsToReveal) {
		for (let word of sentenceToReveal) {
			if (word.includes('*') && word.length === key.length) {
				sentence = sentence.replace(word, key)
			}
		}
	}
	console.log(sentence);
}
revealWords('great',
	'softuni is ***** place for learning new programming languages'
)
revealWords('great, learning',
	'softuni is ***** place for ******** new programming languages'
)