function storeCatalogue(array) {
	let res = [];
	let firstLetter;

	array.forEach((line) => {
		let [name, price] = line.split(" : ");
		res.push({ name, price });
	});

	res.sort((a, b) => a.name.localeCompare(b.name));

	res.forEach((line) => {
		if (firstLetter !== line.name[0].toUpperCase()) {
			firstLetter = line.name[0].toUpperCase();
			console.log(firstLetter);
		}
		console.log(`  ${line.name}: ${line.price}`);
	});
}
storeCatalogue([
	"Appricot : 20.4",
	"Fridge : 1500",
	"TV : 1499",
	"Deodorant : 10",
	"Boiler : 300",
	"Apple : 1.25",
	"Anti-Bug Spray : 15",
	"T-Shirt : 10",
]);
