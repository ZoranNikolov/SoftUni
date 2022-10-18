function computerStore(input) {
	let totalPrice = 0;
	let isSpecial = false;

	for (let line of input) {
		if (line === "special") {
			isSpecial = true;
			break;
		} else if (line === "regular") {
			break;
		}

		Number(line) > 0
			? (totalPrice += Number(line))
			: console.log("Invalid price!");
	}

	let taxes = totalPrice * 0.2;
	let totalPriceWithoutTaxes = totalPrice;
	totalPrice *= 1.2;

	if (isSpecial) {
		totalPrice *= 0.9;
	}

	totalPrice > 0
		? console.log(
				`Congratulations you've just bought a new computer!\nPrice without taxes: ${totalPriceWithoutTaxes.toFixed(
					2
				)}$\nTaxes: ${taxes.toFixed(
					2
				)}$\n-----------\nTotal price: ${totalPrice.toFixed(2)}$`
		  )
		: console.log("Invalid order!");
}
computerStore(["regular"]);
