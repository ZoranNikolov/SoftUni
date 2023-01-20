function attachEventsListeners() {
	let inputFieldElement = document.querySelector("#inputDistance");
	let unitFromElement = document.querySelector("#inputUnits");
	let outputFieldElement = document.querySelector("#outputDistance");
	let unitToElement = document.querySelector("#outputUnits");
	let convertButtonElement = document.querySelector("#convert");

	let conversionRatesFromMeter = {
		km: 1000,
		m: 1,
		cm: 0.01,
		mm: 0.001,
		mi: 1609.34,
		yrd: 0.9144,
		ft: 0.3048,
		in: 0.0254,
	};
	convertButtonElement.addEventListener("click", function () {
		let convertFrom = unitFromElement.value;
		let convertTo = unitToElement.value;

		let valueInMeters =
			inputFieldElement.value * conversionRatesFromMeter[convertFrom];
		let convertedValue =
			valueInMeters / conversionRatesFromMeter[convertTo];
		outputFieldElement.value = convertedValue;
	});
}
