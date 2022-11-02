function theImitationGame(input) {
	let message = input.shift();

	for (const line of input) {
		if (line === "Decode") {
			break;
		}

		let tokens = line.split("|");
		let command = tokens.shift();

		switch (command) {
			case "Move":
				let lettersToMove = Number(tokens[0]);
				let letters = message.slice(0, lettersToMove);
				let first = message.slice(lettersToMove);
				message = first + letters;
				break;
			case "Insert":
				let index = Number(tokens[0]);
				let value = tokens[1];
				let firstPart = message.substring(0, index);
				let secondPart = message.substring(index);
				message = firstPart.concat(value).concat(secondPart);
				break;
			case "ChangeAll":
				let substring = tokens[0];
				let replacement = tokens[1];
				while (message.includes(substring)) {
					message = message.replace(substring, replacement);
				}
				break;
		}
	}
	console.log(`The decrypted message is: ${message}`);
}
theImitationGame(["zzHe", "ChangeAll|z|l", "Insert|2|o", "Move|3", "Decode"]);
theImitationGame(["owyouh", "Move|2", "Move|3", "Insert|3|are", "Insert|9|?", "Decode"]);
