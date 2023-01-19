function solve() {
	let shoppingCart = document.getElementsByClassName("shopping-cart")[0];
	let result = document.getElementsByTagName("textarea")[0];
	let products = [];
	let totalPrice = 0;
	let checkoutDone = false;

	shoppingCart.addEventListener("click", function (event) {
		if (event.target.nodeName !== "BUTTON" || checkoutDone) {
			return;
		}
		
		let btn = event.target;
		if (Array.from(btn.classList).includes("add-product")) {
			let productElement = event.target.parentElement.parentElement;
			let name =
				productElement.querySelectorAll(".product-title")[0]
					.textContent;
			let price = productElement.querySelectorAll(
				".product-line-price"
			)[0].textContent;

			result.textContent += `Added ${name} for ${price} to the cart.\n`;

			if (!products.includes(name)) {
				products.push(name);
			}

			totalPrice += Number(price);
		} else if (Array.from(btn.classList).includes("checkout")) {
			let list = products.join(", ");
			result.textContent += `You bought ${list} for ${totalPrice.toFixed(
				2
			)}.`;
			checkoutDone = true;
		}
	});
}
