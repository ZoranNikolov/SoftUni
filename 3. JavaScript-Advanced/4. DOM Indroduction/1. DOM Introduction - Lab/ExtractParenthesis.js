function extract(content) {
	let text = document.getElementById(content).textContent;
	let pattern = /\(([^)]+)\)/g;
	let matches = text.matchAll(pattern);
	let res = [];

	for (const match of matches) {
		res.push(match[1]);
	}
	return res.join("; ");
}