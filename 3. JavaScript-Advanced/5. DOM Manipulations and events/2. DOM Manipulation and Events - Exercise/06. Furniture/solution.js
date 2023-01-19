function solve() {
	let buttons = document.querySelectorAll("button");
	buttons[0].addEventListener("click", generate);
	buttons[1].addEventListener("click", buy);

	function generate() {
		let currentItems = JSON.parse(document.querySelectorAll("textarea")[0].value);
		let tableBody = document.getElementsByTagName("tbody")[0];
		for (let item of currentItems) {
			let tableRow = document.createElement("tr");
			tableRow.innerHTML = `<td>
									<img src="${item.img}">	
								</td>
								<td>
									<p>${item.name}</p>
								</td>
								<td>
									<p>${item.price}</p>
								</td>
								<td>
									<p>${item.decFactor}</p>
								</td>
								<td>
									<input type="checkbox">
								</td>`;
			tableBody.appendChild(tableRow);
			// let tableData = document.createElement("td");
			// let img = document.createElement("img");
			// img.setAttribute("src", item.img);
			// tableData.appendChild(img);
			// tableRow.appendChild(tableData);
			// let townTableData = document.createElement("td");
			// let townName = document.createElement("p");
			// townName.innerText = item.name;
			// townTableData.appendChild(townName);
			// tableRow.appendChild(townTableData);
			// tableBody.appendChild(tableRow);
			// debugger;
		}
	}

	function buy() {
		let table = Array.from(document.querySelectorAll("tbody tr"));
		let res = [];

		for (let el of table) {
			if (el.querySelector('input[type="checkbox"]:checked')) {
				let tableData = Array.from(el.querySelectorAll("td"));
				let info = {
					name: tableData[1].children[0].textContent,
					price: tableData[2].children[0].textContent,
					decFactor: tableData[3].children[0].textContent,
				};
			}
		}
	}
}
