function solve(input) {
	let pattern = /[>]{2}(?<furniture>[A-z]+)[<]{2}(?<price>[\d.]+)!(?<quantity>[\d]+)\b/g;
	let text = input.join(", ");
	let res = [];
	let totalSum = 0;
	let match = pattern.exec(text);

	while (match !== null) {
		res.push(match.groups.furniture);
		let quantity = Number(match.groups.quantity);
		let price = Number(match.groups.price);

		totalSum += quantity * price;

		text = match = pattern.exec(text);
	}
	console.log(res);
	console.log(totalSum);
}
solve([
	">>Laptop<<312.2323!3",
	">>TV<<300.21314!5",
	">Invalid<<!5",
	">>TV<<300.21314!20",
	">>Invalid<!5",
	">>TV<<30.21314!5",
	">>Invalid<<!!5",
	"Purchase",
]);
