function solve() {
	let text = document.getElementById("text").value;
	let convention = document.getElementById("naming-convention").value;
	let textArray = text.split(" ");
	let res = "";

	switch (convention) {
		case "Camel Case":
			textArray.forEach((el, i) => {
				i === 0
					? (res += el.toLowerCase())
					: (res += el[0].toUpperCase() + el.substring(1).toLowerCase());
			});
			break;
		case "Pascal Case":
			textArray.forEach((el) => {
				res += el[0].toUpperCase() + el.substring(1).toLowerCase();
			});
			break;
		default:
			res = "Error!";
	}
	document.getElementById("result").textContent = res;
}
