function deleteByEmail() {
	let email = document.getElementsByName("email")[0].value;
	let secondCol = document.querySelectorAll("#customers tr td:nth-child(2)");

	for (let tableData of secondCol) {
		if (tableData.textContent === email) {
			let row = tableData.parentNode;
			row.remove();
			document.getElementById("result").textContent = "Deleted.";
			return;
		}
		document.getElementById("result").textContent = "Not found.";
	}
}
