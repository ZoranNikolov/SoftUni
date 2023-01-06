function lowestPricesInCities(array) {
	let res = {};
	for (let line of array) {
		let [town, product, price] = line.split(" | ");
		price = Number(price);

		if (res.hasOwnProperty(product)) {
			let currentPrice = res[product]["price"];
			if (currentPrice > price) {
				res[product] = { town, price };
			}
		} else {
			res[product] = { town, price };
		}
	}

	for (let [product, value] of Object.entries(res)) {
		console.log(`${product} -> ${value.price} (${value.town})`);
	}
}
lowestPricesInCities([
	"Sample Town | Sample Product | 1000",
	"Sample Town | Orange | 2",
	"Sample Town | Peach | 1",
	"Sofia | Orange | 3",
	"Sofia | Peach | 2",
	"New York | Sample Product | 1000.1",
	"New York | Burger | 10",
]);
