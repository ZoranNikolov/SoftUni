function sumTable() {
	let tableData = document.querySelectorAll("table tr");
	let sum = 0;

	for (let index = 1; index < tableData.length - 1; index++) {
		let cols = tableData[index].children;
		let price = cols[1].textContent;
		sum += Number(price);
	}
	document.getElementById("sum").textContent = sum;
}
