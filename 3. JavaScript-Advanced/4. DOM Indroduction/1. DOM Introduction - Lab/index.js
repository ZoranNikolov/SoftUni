function solve(ref, match, replacer) {
	let text = ref.textContent;

	text = text.replaceAll(match, replacer);

	ref.textContent = text;
}

let element = document.getElementById("change-me");

solve(element, "changed", "new");
