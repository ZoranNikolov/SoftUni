function adAstra(input) {
	let string = input[0];
	let pattern =
		/([#|\|])(?<item>[A-Za-z\s]+)\1(?<date>\d{2}\/\d{2}\/\d{2})\1(?<calories>[\d+]{1,5})\1/g;
	let foodInfo = [];
	let totalFoodCal = 0;
	let daysToLast = 0;
	let match = pattern.exec(string);

	while (match) {
		foodInfo.push({
			item: match.groups.item,
			date: match.groups.date,
			calories: match.groups.calories,
		});
		totalFoodCal += Number(match.groups.calories);
		match = pattern.exec(string);
	}

	daysToLast = Math.floor(totalFoodCal / 2000);

	console.log(`You have food to last you for: ${daysToLast} days!`);

	for (const el of foodInfo) {
		console.log(
			`Item: ${el.item}, Best before: ${el.date}, Nutrition: ${el.calories}`
		);
	}
}
adAstra([
	"#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|",
]);
adAstra([
	"$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|",
]);
adAstra(["Hello|#Invalid food#19/03/20#450|$5*(@"]);