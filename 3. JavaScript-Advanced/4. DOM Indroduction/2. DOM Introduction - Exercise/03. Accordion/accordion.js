function toggle() {
	let buttonText = document.getElementsByClassName("button")[0];
	let extra = document.getElementById("extra");

	if (extra.style.display === "none") {
		buttonText.textContent = "Less";
		extra.style.display = "block";
	} else {
		buttonText.textContent = "More";
		extra.style.display = "none";
	}
}