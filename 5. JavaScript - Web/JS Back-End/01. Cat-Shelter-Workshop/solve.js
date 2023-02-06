function softUniBarIncome(string) {

	let totalSum = 0
	let regex = /%(?<name>[A-Z][a-z]+)%[^$%|.]*<(?<product>\w+)>[^$%|.]*\|(?<count>\d+)\|[^$%|.]*?(?<price>\d+\.?\d+)\$/gm
	let text = string.join('-')

	let current = regex.exec(text);

	while (current) {

		let currentPrice = current.groups.count * current.groups.price

		console.log(`${current.groups.name}: ${current.groups.product} - ${currentPrice.toFixed(2)}`);

		totalSum += currentPrice

		current = regex.exec(text)
	}
	console.log(`Total income: ${totalSum.toFixed(2)}`);
}
softUniBarIncome([
	'%George%<Croissant>|2|10.3$',
	'%Peter%<Gum>|1|1.3$',
	'%Maria%<Cola>|1|2.4$',
	'end of shift'])
console.log('---');
softUniBarIncome([
	'%InvalidName%<Croissant>|2|10.3$',
	'%Peter%<Gum>1.3$',
	'%Maria%<Cola>|1|2.4',
	'%Valid%<Valid>valid|10|valid20$',
	'end of shift'])