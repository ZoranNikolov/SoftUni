function passwordReset(input) {
	let password = input.shift();

	let commandParser = {
		TakeOdd(password) {
			let tempString = "";
			password = password.split("");
			password.forEach((char, index) => {
				if (index % 2 !== 0) {
					tempString += char;
				}
			});
			password = tempString;
			console.log(password);
			return password;
		},
		Cut(password, index, length) {
			index = Number(index);
			length = Number(length);
			let endIndex = index + length;

			let firstPart = password.substring(0, index);
			let secondPart = password.substring(endIndex);
			password = firstPart + secondPart;
			console.log(password);
			return password;
		},
		Substitute(password, substring, substitute) {
			if (password.includes(substring)) {
				let regex = new RegExp(substring, "g");
				password = password.replace(regex, substitute);
				console.log(password);
			} else {
				console.log("Nothing to replace!");
			}
			return password;
		},
	};

	input.forEach((line) => {
		if (line !== "Done") {
			let [command, ...tokens] = line.split(" ");
			password = commandParser[command](password, ...tokens);
		}
	});

	console.log(`Your password is: ${password}`);
}
passwordReset([
	"Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr",
	"TakeOdd",
	"Cut 15 3",
	"Substitute :: -",
	"Substitute | ^",
	"Done",
]);
passwordReset([
	"up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy",
	"TakeOdd",
	"Cut 18 2",
	"Substitute ! ***",
	"Substitute ? .!.",
	"Done",
]);

