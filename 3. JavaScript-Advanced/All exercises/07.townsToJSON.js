function townsToJSON(array) {
	let res = [];

	for (let i = 1; i < array.length; i++) {
		let [town, latitude, longitude] = array[i].split(" | ");
		town = town.replace("| ", "");
		latitude = Number(Number(latitude).toFixed(2));
		longitude = Number(Number(longitude.replace(" |", "")).toFixed(2));
		res.push({ Town: town, Latitude: latitude, Longitude: longitude });
	}
	console.log(JSON.stringify(res));
}
townsToJSON([
	"| Town | Latitude | Longitude |",
	"| Veliko Turnovo | 43.0757 | 25.6172 |",
	"| Monatevideo | 34.50 | 56.11 |",
]);
