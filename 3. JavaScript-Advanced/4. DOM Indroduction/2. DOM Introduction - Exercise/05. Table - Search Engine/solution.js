function solve() {
	document.querySelector("#searchBtn").addEventListener("click", onClick);

	function onClick() {
		const input = document.getElementById("searchField").value;
		const table = document.getElementsByTagName("tr");
		const prevSearch = document.getElementsByClassName("select");
		
		if (prevSearch[0]) {
			prevSearch[0].classList.remove("select");
		}

		for (let i = 2; i < table.length; i++) {
			let row = table[i];

			Array.from(row.children).forEach((cell) => {
				if (
					cell.textContent.toLowerCase().includes(input.toLowerCase())
				) {
					table[i].classList.add("select");
				}
			});
		}
		document.getElementById("searchField").value = "";
	}
}
