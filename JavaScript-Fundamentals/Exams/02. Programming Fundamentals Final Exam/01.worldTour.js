function worldTour(input) {
	let stops = input.shift();
	let commandParser = {
		"Add Stop": (stops, index, string) => {
			index = Number(index);
			if (stops[index]) {
				let firstPart = stops.substring(0, index);
				let secondPart = stops.substring(index);
				stops = firstPart + string + secondPart;
			}
			return stops;
		},
		"Remove Stop": (stops, startIndex, endIndex) => {
			startIndex = Number(startIndex);
			endIndex = Number(endIndex);
			if (stops[startIndex] && stops[endIndex]) {
				let firstPart = stops.substring(0, startIndex);
				let secondPart = stops.substring(endIndex + 1);
				stops = firstPart + secondPart;
			}
			return stops;
		},
		Switch: (stops, oldString, newString) => {
			if (stops.includes(oldString)) {
				oldString = new RegExp(oldString, "g");
				stops = stops.replace(oldString, newString);
			}
			return stops;
		},
	};

	input.forEach((line) => {
		if (line !== "Travel") {
			let [command, ...tokens] = line.split(":");
			stops = commandParser[command](stops, ...tokens);
			console.log(stops);
		}
	});
	console.log(`Ready for world tour! Planned stops: ${stops}`);
}
worldTour([
	"Hawai::Cyprys-Greece",
	"Add Stop:7:Rome",
	"Remove Stop:11:16",
	"Switch:Hawai:Bulgaria",
	"Travel",
]);
// worldTour([
// 	"Albania:Bulgaria:Cyprus:Deuchland",
// 	"Add Stop:3:Nigeria",
// 	"Remove Stop:4:8",
// 	"Switch:Albania: Azərbaycan",
// 	"Travel",
// ]);
