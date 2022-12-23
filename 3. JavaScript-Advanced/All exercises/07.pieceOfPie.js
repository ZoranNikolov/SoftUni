function pieceOfPie(array, flavorOne, flavorTwo) {
	let res = array.slice(
		array.indexOf(flavorOne),
		array.indexOf(flavorTwo) + 1
	);
	return res;
}
pieceOfPie(
	[
		"Pumpkin Pie",
		"Key Lime Pie",
		"Cherry Pie",
		"Lemon Meringue Pie",
		"Sugar Cream Pie",
	],
	"Key Lime Pie",
	"Lemon Meringue Pie"
);
