function modernTimes(string) {
	let sentence = string.split(' ')
	for (const word of sentence) {
		let flag = true
		let wordLower = word.toLowerCase()
		if (word.startsWith('#') && word.length > 1) {
			for (let i = 1; i < word.length; i++) {
				if (wordLower.charCodeAt(i) < 97 || wordLower.charCodeAt(i) > 122) {
					flag = false
					break
				}
			}
			if (flag) {
				console.log(word.substring(1));
			}
		}
	}
}
modernTimes('Nowadays everyone uses # to tag a #special word in #socialMedia')
modernTimes('The symbol # is known #variously in English-speaking #regions as the #number sign')