function theImitationGame(input) {
	let message = input.shift();

	let commandParser = {
		Move(message, numberOfLetters) {
			numberOfLetters = Number(numberOfLetters);
			let firstPart = message.slice(numberOfLetters);
			let secondPart = message.slice(0, numberOfLetters);
			message = firstPart + secondPart;
			return message;
		},
		Insert(message, index, value) {
			index = Number(index);
			let firstPart = message.substring(0, index);
			let secondPart = message.substring(index);
			message = firstPart + value + secondPart;
			return message;
		},
		ChangeAll(message, substring, replacement) {
			while (message.includes(substring)) {
				message = message.replace(substring, replacement);
			}
			return message;
		},
	};

	for (const line of input) {
		if (line === "Decode") {
			break;
		}

		let [command, ...tokens] = line.split("|");
		message = commandParser[command](message, ...tokens);
	}
	console.log(`The decrypted message is: ${message}`);
}
theImitationGame(["zzHe", "ChangeAll|z|l", "Insert|2|o", "Move|3", "Decode"]);
theImitationGame([
	"owyouh",
	"Move|2",
	"Move|3",
	"Insert|3|are",
	"Insert|9|?",
	"Decode",
]);
