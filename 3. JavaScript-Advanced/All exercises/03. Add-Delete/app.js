function addItem() {
	let newElemenet = document.getElementById("newItemText").value;
	let list = document.getElementById("items");

	if (newElemenet.length === 0) {
		return;
	}

	let listItem = document.createElement("li");
	listItem.textContent = newElemenet;
	list.appendChild(listItem);

	let remove = document.createElement("a");
	let linkText = document.createTextNode("[Delete]");
	remove.appendChild(linkText);
	remove.href = "#";
	remove.addEventListener("click", deleteItem);

	listItem.appendChild(remove);

	function deleteItem() {
		listItem.remove();
	}
}
