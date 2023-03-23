const CONVERTION_RATES = {
	eur: {
		usd: 1.0644,
		bgn: 1.9558,
		gbp: 0.8847,
		jpy: 144.62,
		notation: 'EUR - Euro'
	},
	bgn: {
		eur: 0.5112,
		usd: 0.5442,
		gbp: 0.4522,
		jpy: 73.938,
		notation: 'BGN - Bulgarian Lev'
	},
	usd: {
		bgn: 1.8372,
		eur: 0.9393,
		gbp: 0.8309,
		jpy: 135.83,
		notation: 'USD - US Dollar'
	},
	gbp: {
		usd: 1.2035,
		bgn: 2.2111,
		eur: 1.1305,
		jpy: 163.47,
		notation: 'GBP - British Pound'
	},
	jpy: {
		gbp: 0.0061175,
		usd: 0.0073607,
		bgn: 0.013526,
		eur: 0.0069156,
		notation: 'JPY - Japanese Yen'
	},
};

Object.keys(CONVERTION_RATES).forEach(currency => {
	const dropDownMenues = document.querySelectorAll('.dropdown-currency');
	dropDownMenues.forEach(dropDownMenu => {
		const option = document.createElement('option');
		option.value = CONVERTION_RATES[currency].notation.slice(0, 3);
		option.textContent = CONVERTION_RATES[currency].notation;
		dropDownMenu.appendChild(option);
	})
})

const buttonConvert = document.querySelector(".convert-btn");
buttonConvert.addEventListener("click", convertCurrency);

const buttonShowRates = document.querySelector(".show-btn");
buttonShowRates.addEventListener("click", showRates);

//If the user input is valid, converts the desired currencies. If not, shows error.
function convertCurrency(event) {
	event.preventDefault();

	const amountToConvert = Number(document.querySelector("#amount").value);

	if (isInputInvalid(amountToConvert)) {
		showError(isInputInvalid(amountToConvert));
	} else {
		getConvertionResult(amountToConvert);
	}
}

//Gets the result of the convertion.
function getConvertionResult(input){
	const currencyToConvertFrom = document.querySelector("#from-currency").value;
	const currencyToConvertTo = document.querySelector("#to-currency").value;
	const resultMessageContainer = document.querySelector(".message-container");
	const p = document.createElement("p");

	
	if(currencyToConvertFrom === currencyToConvertTo){
		p.innerText = `${input.toFixed(2)} ${currencyToConvertFrom} = ${input.toFixed(2)} ${currencyToConvertTo}`
	} else {
		const currentRate =	CONVERTION_RATES[currencyToConvertFrom.toLowerCase()][currencyToConvertTo.toLowerCase()];
		let result = input * currentRate;
		p.innerText = `${input.toFixed(2)} ${currencyToConvertFrom} = ${result.toFixed(2)} ${currencyToConvertTo}\n
		Convertion rates:\n
		1 ${currencyToConvertFrom} = ${currentRate} ${currencyToConvertTo}\n
		1 ${currencyToConvertTo} = ${CONVERTION_RATES[currencyToConvertTo.toLowerCase()][currencyToConvertFrom.toLowerCase()]} ${currencyToConvertFrom}`;
	}
	
	clearPreviousContent(resultMessageContainer)
	resultMessageContainer.appendChild(p);
	resultMessageContainer.classList.remove("hidden");
}

//Shows the convertion rates of the desired currency.
function showRates(){
	const chosenCurrency = document.querySelector(".rates-wrapper select").value;
	const ratesContainer = document.querySelector(".currency-rates-result");
	let chosenCurrencyRates = CONVERTION_RATES[chosenCurrency.toLowerCase()];
	let messageArr = [];

	Object.keys(chosenCurrencyRates).forEach((currentCurrency) => {
		if (currentCurrency != "notation") {
			messageArr.push(
				`${chosenCurrency} -> ${currentCurrency.toUpperCase()} ${chosenCurrencyRates[currentCurrency]}`
			);
		}
	});

	clearPreviousContent(ratesContainer)

	let p = document.createElement("p");
	p.innerText = messageArr.join("\n");
	ratesContainer.append(p);
	ratesContainer.classList.remove("hidden");
}

//Clears the previous shown content in the container - rates/errors/convertion results.
function clearPreviousContent(divContent) {
	if (divContent.querySelector("p")) {
		divContent.removeChild(divContent.querySelector("p"));
	}
}

//Shows error message.
function showError(message) {
	const resultMessageContainer = document.querySelector(".message-container");
	const p = document.createElement("p");
	p.innerText = message;
	p.classList.add("error");

	clearPreviousContent(resultMessageContainer);

	return resultMessageContainer.appendChild(p);
}

//Checks if the user input is positive number. If not, the functiion returns error message.
function isInputInvalid(input) {
	if (isNaN(input)) {
		return "The amount must be a number.\nPlease, enter a valid amount.";
	} else if (input <= 0) {
		return "The amount must be a positive value.\nPlease, enter a valid amount.";
	}
}