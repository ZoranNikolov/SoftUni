function activationKeys(input) {
	let rawKey = input.shift();

	let commandParser = {
		Contains(rawKey, substring) {
			if (rawKey.includes(substring)) {
				console.log(`${rawKey} contains ${substring}`);
			} else {
				console.log("Substring not found!");
			}
			return rawKey;
		},
		Flip(rawKey, upperOrLower, startIndexFlip, endIndexFlip) {
			startIndexFlip = Number(startIndexFlip);
			endIndexFlip = Number(endIndexFlip);
			let firstPart = rawKey.slice(0, startIndexFlip);
			let secondPart = rawKey.slice(startIndexFlip, endIndexFlip);
			upperOrLower === "Upper"
				? (secondPart = secondPart.toUpperCase())
				: (secondPart = secondPart.toLowerCase());
			let thirdPart = rawKey.slice(endIndexFlip);
			rawKey = firstPart + secondPart + thirdPart;
			console.log(rawKey);
			return rawKey;
		},
		Slice(rawKey, startIndexSlice, endIndexSlice) {
			startIndexSlice = Number(startIndexSlice);
			endIndexSlice = Number(endIndexSlice);
			let firstPart = rawKey.slice(0, startIndexSlice);
			let secondPart = rawKey.slice(endIndexSlice);
			rawKey = firstPart + secondPart;
			console.log(rawKey);
			return rawKey;
		},
	};

	input.forEach((line) => {
		if (line !== "Generate") {
			let [command, ...tokens] = line.split(">>>");
			rawKey = commandParser[command](rawKey, ...tokens);
		}
	});
	console.log(`Your activation key is: ${rawKey}`);
}
// activationKeys([
// 	"abcdefghijklmnopqrstuvwxyz",
// 	"Slice>>>2>>>6",
// 	"Flip>>>Upper>>>3>>>14",
// 	"Flip>>>Lower>>>5>>>7",
// 	"Contains>>>def",
// 	"Contains>>>deF",
// 	"Generate",
// ]);
activationKeys([
	"134softsf5ftuni2020rockz42",
	"Slice>>>3>>>7",
	"Contains>>>-rock",
	"Contains>>>-uni-",
	"Contains>>>-rocks",
	"Flip>>>Upper>>>2>>>8",
	"Flip>>>Lower>>>5>>>11",
	"Generate",
]);
