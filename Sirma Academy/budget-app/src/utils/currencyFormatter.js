export default function currencyFormatter(amount, text) { //if the user has written the amount in format 100,00, converts it to format 100.00
	let textArray = text.split(" ");
	let lastElementOfText = textArray.pop();
	if (!isNaN(lastElementOfText)) {
		amount = [lastElementOfText, amount].join(".");
		text = textArray.join(" ");
	}
	return { amount, text };
}
