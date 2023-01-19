function validate() {
	let pattern = /^([\w\-.]+)@([a-z]+)(\.[a-z]+)+$/;
	let inputField = document.getElementById("email");

	inputField.addEventListener("change", checkValidity);

	function checkValidity(event) {
		if (pattern.test(event.target.value)) {
			event.target.removeAttribute("class");
			return;
		}
		event.target.className = "error";
	}
}
