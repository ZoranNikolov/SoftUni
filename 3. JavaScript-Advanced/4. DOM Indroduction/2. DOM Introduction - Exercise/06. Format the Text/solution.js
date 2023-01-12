function solve() {
	let input = document.getElementById("input").value;
	let arrayText = input.split(". ");
	let buff = "";

	for (let i = 0; i < arrayText.length; i += 3) {
		let res = [];
		for (let j = 0; j < 3; j++) {
			if (arrayText[i + j]) {
				res.push(arrayText[i + j]);
			}
		}
		let resText = res.join(". ") + ".".trim();
	}
}
