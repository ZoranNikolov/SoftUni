function secretChat(input) {
	let message = input.shift();

	let commandParser = {
		InsertSpace: (message, index) => {
			index = Number(index);
			let firstPart = message.substring(0, index);
			let secondPart = message.substring(index);
			message = firstPart + " " + secondPart;
			console.log(message);
			return message;
		},
		Reverse: (message, substring) => {
			if (message.includes(substring)) {
				let startIndex = message.indexOf(substring[0]);
				let endIndex = startIndex + substring.length;
				let firstPart = message.substring(0, startIndex);
				let secondPart = message.substring(endIndex);
				substring = substring.split("").reverse().join("");
				message = firstPart + secondPart + substring;
				console.log(message);
				return message;
			} else {
				console.log("error");
				return message;
			}
		},
		ChangeAll: (message, substringChange, replacement) => {
			if (message.includes(substringChange)) {
				let regex = new RegExp(substringChange, "g");
				message = message.replace(regex, replacement);
			}
			console.log(message);
			return message;
		},
	};

	input.forEach((line) => {
		let [command, ...tokens] = line.split(":|:");
		if (line !== "Reveal") {
			message = commandParser[command](message, ...tokens);
		}
	});

	console.log(`You have a new text message: ${message}`);
}
// secretChat(["heVVodar!gniV", "ChangeAll:|:V:|:l", "Reverse:|:!gnil", "InsertSpace:|:5", "Reveal"]);
secretChat([
	"Hiware?uiy",
	"ChangeAll:|:i:|:o",
	"Reverse:|:?uoy",
	"Reverse:|:jd",
	"InsertSpace:|:3",
	"InsertSpace:|:7",
	"Reveal",
]);
