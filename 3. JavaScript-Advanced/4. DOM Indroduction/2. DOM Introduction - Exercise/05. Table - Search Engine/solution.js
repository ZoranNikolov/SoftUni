function solve() {
	document.querySelector("#searchBtn").addEventListener("click", onClick);

	function onClick() {
		let input = document.getElementById("searchField").value;
		let table = document.getElementsByTagName("tr");

		let isMatched = false;

		for (let i = 2; i < table.length; i++) {
			let row = table[i];
			let tempArr = [];

			Array.from(row.children).forEach((cell) => {
				if (
					cell.textContent.toLowerCase().includes(input.toLowerCase())
				) {
					console.log("Hurray!");
					isMatched = true;
				}
			});

			if (isMatched) {
				break;
			}
		}
		// debugger;
	}
}
