function solve(input) {
	let pattern =
		/%(?<name>[A-Z][a-z]+)%[^|$%.]*<(?<product>\w+)>[^|$%.]*\|(?<count>\d+)\|[^|$%.]*?(?<price>\d+\.?\d+)?\$/g;
	let total = 0;
	let text = input.join("-");
	let current = pattern.exec(text);

	while (current) {
		let currentPrice = current.groups.count * current.groups.price;
		console.log(
			`${current.groups.name}: ${current.groups.product} - ${currentPrice.toFixed(2)}`
		);
		total += currentPrice;
		current = pattern.exec(text);
	}
	console.log(`Total income: ${total.toFixed(2)}`);
}
solve([
	"%InvalidName%<Croissant>|2|10.3$",
	"%Peter%<Gum>1.3$",
	"%Maria%<Cola>|1|2.4",
	"%Valid%<Valid>valid|10|valid20$",
	"end of shift",
]);
