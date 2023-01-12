function extractText() {
	const listItems = document.querySelectorAll("ul li");
	let textArea = document.getElementById("result");

	for (const item of listItems) {
		textArea.value += item.textContent + "\n";
	}
}
