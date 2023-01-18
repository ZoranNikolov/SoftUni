function addItem() {
	let input = document.getElementById("newItemText").value;
	if (input != "") {
		let li = document.createElement("li");
		li.appendChild(document.createTextNode(input));
		document.getElementById("items").appendChild(li);
		document.getElementById("newItemText").value = "";
	}
}
