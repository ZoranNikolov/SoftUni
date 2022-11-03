"use strict";

function printRandNum() {
	let num = Math.round(Math.random() * 100);
	document.body.innerHTML += `<div>${num}</div>`;
}
