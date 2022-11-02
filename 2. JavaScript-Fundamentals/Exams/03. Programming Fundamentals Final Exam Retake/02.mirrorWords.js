function mirrorWords(input) {
	let pattern = /(\@|\#)[A-Za-z]{3,}\1\1[A-Za-z]{3,}\1/g;
	let string = input.shift();
	let match = string.match(pattern);
	let pairs = [];
	let mirrorWords = [];

	if (match !== null) {
		match = match.map((word) => (word = word.substring(1, word.length - 1)));
		match.forEach((pair) => {
			let words = pair.split(/[##, @@]+/);
			pairs.push(...words);
		});
	}

	let pairsNumber = pairs.length / 2;

	if (pairsNumber > 0) {
		for (let i = 0; i < pairs.length - 1; i += 2) {
			let word = pairs[i];
			let nextWord = pairs[i + 1];
			let reversedNextWord = nextWord.split("").reverse().join("");
			if (word === reversedNextWord) {
				mirrorWords.push(word, nextWord);
			}
		}

		console.log(`${pairsNumber} word pairs found!`);
	} else {
		console.log("No word pairs found!");
	}

	if (mirrorWords.length > 0) {
		console.log("The mirror words are:");
		let res = [];
		for (let i = 0; i < mirrorWords.length - 1; i += 2) {
			let token = `${mirrorWords[i]} <=> ${mirrorWords[i + 1]}`;
			res.push(token);
		}

		console.log(res.join(", "));
	} else {
		console.log("No mirror words!");
	}
}
// mirrorWords([
// 	"@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r",
// ]);
mirrorWords(["#po0l##l0op# @bAc##cAB@ @LM@ML@ #xxxXxx##xxxXxx# @aba@@ababa@"]);
// mirrorWords(["#lol#lol# @#God@@doG@# #abC@@Cba# @Xyu@#uyX#"]);
