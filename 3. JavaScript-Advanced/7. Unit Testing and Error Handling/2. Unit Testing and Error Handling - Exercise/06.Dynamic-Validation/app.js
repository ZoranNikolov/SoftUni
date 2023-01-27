function validate() {
	let input = document.getElementById("email");
	input.addEventListener("change", onChange);

	function onChange(e) {
		let email = e.target.value;
		let emailPattern = /[A-Za-z0_9]+@[A-Za-z0_9]+\.[A-Za-z]+/g;
		if (emailPattern.test(email)) {
			e.target.classList.remove("error");
		} else {
			e.target.classList.add("error");
		}
	}
}
