function encodeAndDecodeMessages() {
	let buttons = document.querySelectorAll("button");
	buttons[0].addEventListener("click", encode);
	buttons[1].addEventListener("click", decode);

	function encode() {
		let newMsg = "";
		let textAreas = document.querySelectorAll("textarea");
		let currentText = textAreas[0].value;

		for (let i = 0; i < currentText.length; i++) {
			let currentCharacter = currentText[i].charCodeAt();
			newMsg += String.fromCharCode(currentCharacter + 1);
		}

		let currentTextArea = textAreas[0];
		currentTextArea.value = "";
		let resultTextArea = textAreas[1];
		resultTextArea.value = newMsg;
	}

	function decode(e) {
		let currentArea = e.target.parentElement.children[1];
		let currentText = currentArea.value;
		let resultMsg = "";
		for (let i = 0; i < currentText.length; i++) {
			let ch = currentText[i].charCodeAt();
			resultMsg += String.fromCharCode(ch - 1);
		}
		currentArea.value = resultMsg;
	}
}
