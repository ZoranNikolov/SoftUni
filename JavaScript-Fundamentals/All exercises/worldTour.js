function worldTour(input) {
	let initialString = input.shift();

	for (const line of input) {
		if (line === "Travel") {
			break;
		}

		let [action, firstParam, lastParam] = line.split(":");
		let startIndex;
		let endIndex;

		switch (action) {
			case "Add Stop":
				startIndex = Number(firstParam);
				if (initialString[startIndex]) {
					let value = lastParam;
					let firstPart = initialString.slice(0, startIndex);
					let secondPart = initialString.slice(startIndex);
					initialString = firstPart + value + secondPart;
				}
				break;
			case "Remove Stop":
				startIndex = Number(firstParam);
				endIndex = Number(lastParam);
				if (initialString[startIndex] && initialString[endIndex]) {
					let substr = initialString.substring(startIndex, endIndex + 1);
					initialString = initialString.replace(substr, "");
				}
				break;
			case "Switch":
				let oldValue = firstParam;
				let newValue = lastParam;
				let pattern = new RegExp(oldValue, "g");

				initialString = initialString.replace(pattern, newValue);
				break;
		}
		console.log(initialString);
	}
	console.log(`Ready for world tour! Planned stops: ${initialString}`);
}
// worldTour([
// 	"Hawai::Cyprys-Greece",
// 	"Add Stop:7:Rome",
// 	"Remove Stop:11:16",
// 	"Switch:Hawai:Bulgaria",
// 	"Travel",
// ]);
worldTour([
	"Albania:Bulgaria:Cyprus:Deuchland",
	"Add Stop:3:Nigeria",
	"Remove Stop:4:8",
	"Switch:Albania: Azərbaycan",
	"Travel",
]);