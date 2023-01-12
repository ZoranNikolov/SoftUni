function solve(elementId) {
	let elementText = document.getElementById(elementId).textContent;

	let pattern = /\(([^)]+)\)/g;

	let result = elementText.matchAll(pattern);

	let matches = [];

	for (const text of result) {
		matches.push(text[1]);
	}
	
	return matches.join('; ')

}
let result = solve("content");
console.log(result);