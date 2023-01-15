function solve() {
	let input = document.getElementById("input").value;
	let output = document.getElementById("output");
	output.textContent = "";
	let arrayText = input.split(".").filter((el) => el.length > 0);

	for (let i = 0; i < arrayText.length; i += 3) {
		let res = [];
		for (let j = 0; j < 3; j++) {
			if (arrayText[i + j]) {
				res.push(arrayText[i + j]);
			}
		}
		let resText = res.join(". ") + "."
		output.innerHTML += `<p>${resText}</p>`;
	}
}
