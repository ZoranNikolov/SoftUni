function activationKeys(input) {
	let activationKey = input.shift();

	let commandParser = {
		Contains(activationKey, string) {
			if (activationKey.includes(string)) {
				console.log(`${activationKey} contains ${string}`);
			} else {
				console.log("Substring not found!");
			}

			return activationKey;
		},
		Flip(activationKey, characterCase, flipStartIndex, flipEndIndex) {
			flipStartIndex = Number(flipStartIndex);
			flipEndIndex = Number(flipEndIndex);
			let firstPart = activationKey.substring(0, flipStartIndex);
			let stringToFlip = activationKey.substring(flipStartIndex, flipEndIndex);
			let secondPart = activationKey.substring(flipEndIndex);

			switch (characterCase) {
				case "Upper":
					stringToFlip = stringToFlip.toUpperCase();
					break;
				case "Lower":
					stringToFlip = stringToFlip.toLowerCase();
					break;
			}

			activationKey = firstPart + stringToFlip + secondPart;
			console.log(activationKey);

			return activationKey;
		},
		Slice(activationKey, sliceStartIndex, sliceEndIndex) {
			sliceStartIndex = Number(sliceStartIndex);
			sliceEndIndex = Number(sliceEndIndex);

			let firstPart = activationKey.substring(0, sliceStartIndex);
			let secondPart = activationKey.substring(sliceEndIndex);
			activationKey = firstPart + secondPart;
			console.log(activationKey);

			return activationKey;
		},
	};

	input.forEach((line) => {
		if (line !== "Generate") {
			let [command, ...tokens] = line.split(">>>");
			activationKey = commandParser[command](activationKey, ...tokens);
		}
	});

	console.log(`Your activation key is: ${activationKey}`);
}
activationKeys([
	"abcdefghijklmnopqrstuvwxyz",
	"Slice>>>2>>>6",
	"Flip>>>Upper>>>3>>>14",
	"Flip>>>Lower>>>5>>>7",
	"Contains>>>def",
	"Contains>>>deF",
	"Generate",
]);
// activationKeys([
// 	"134softsf5ftuni2020rockz42",
// 	"Slice>>>3>>>7",
// 	"Contains>>>-rock",
// 	"Contains>>>-uni-",
// 	"Contains>>>-rocks",
// 	"Flip>>>Upper>>>2>>>8",
// 	"Flip>>>Lower>>>5>>>11",
// 	"Generate",
// ]);
