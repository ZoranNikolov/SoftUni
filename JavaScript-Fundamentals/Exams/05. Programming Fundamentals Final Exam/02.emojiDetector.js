function emojiDetector(input) {
	let string = input[0];
	let emojiPattern = /(\::|\*\*)[A-Z][a-z]{2,}\1/g;
	let digitsPattern = /[0-9]+/g;

	let emojiArr = string.match(emojiPattern);
	let digitsArr = string.match(digitsPattern).join("").split("").map(Number);
	let threshold = digitsArr.reduce((a, b) => a * b);
	let coolEmojis = [];

	emojiArr.forEach((emoji) => {
		let emojiChars = emoji.substring(2, emoji.length - 2).split("");
		let coolness = 0;
		emojiChars.forEach((char) => {
			coolness += char.charCodeAt();
		});
		if (coolness >= threshold) {
			coolEmojis.push(emoji);
		}
	});

	console.log(`Cool threshold: ${threshold}`);
	console.log(`${emojiArr.length} emojis found in the text. The cool ones are:`);

	if (coolEmojis.length > 0) {
		coolEmojis.forEach((emoji) => console.log(emoji));
	}
}
emojiDetector([
	"In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**",
]);
emojiDetector([
	"5, 4, 3, 2, 1, go! The 1-th consecutive banana-eating contest has begun! ::Joy:: **Banana** ::Wink:: **Vali** ::valid_emoji::",
]);
emojiDetector([
	"It is a long established fact that 1 a reader will be distracted by 9 the readable content of a page when looking at its layout. The point of using ::LoremIpsum:: is that it has a more-or-less normal 3 distribution of 8 letters, as opposed to using 'Content here, content 99 here', making it look like readable **English**.",
]);
