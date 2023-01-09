let elements = document.getElementsByClassName("important-info");

for (const element of elements) {
	if (element.tagName === "H1") {
		element.style.color = "yellow";
	}
}
