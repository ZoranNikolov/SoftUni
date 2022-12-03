function emoji(input) {
	let string = input[0];
	let stringPattern = /(\::|\*\*)[A-Z][a-z]{2,}\1/g;
	let digitPattern = /\d+/g;
	let validEmojisArr = string.match(stringPattern);
	let validEmojisCount = validEmojisArr.length;
	let digitsArr = string.match(digitPattern).join("").split("").map(Number);
	let threshold = digitsArr.reduce((acc, val) => acc * val);
	let coolEmojisArr = [];
	validEmojisArr.forEach((word) => {
		let [...chars] = word.split("").slice(2, word.length - 2);
		let sum = 0;
		chars.forEach((ch) => {
			let value = ch.charCodeAt();
			sum += value;
		});
		if (sum >= threshold) {
			coolEmojisArr.push(word);
		}
	});
	console.log(`Cool threshold: ${threshold}`);
	console.log(
		`${validEmojisCount} emojis found in the text. The cool ones are:`
	);
	coolEmojisArr.forEach((emoji) => console.log(emoji));
}
emoji([
	"In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**",
]);
emoji([
	"It is a long established fact that 1 a reader will be distracted by 9 the readable content of a page when looking at its layout. The point of using ::LoremIpsum:: is that it has a more-or-less normal 3 distribution of 8 letters, as opposed to using 'Content here, content 99 here', making it look like readable **English**.",
]);
