export const validateData = (setErrorMessages) => {

	const validateTransactionType = (inputData) => { //checks if the first element of the row is a valid transaction type - income/expense
		inputData.forEach((row, index) => {
			let invalidTransactionTypeMessage = "Invalid transaction type on line";
			if (row[0] !== "income" && row[0] !== "expense") {
				invalidTransactionTypeMessage += ` ${index + 1}.`;
				setErrorMessages((prevMessages) => [
					...prevMessages.filter((message) => 
						message !== invalidTransactionTypeMessage),
					invalidTransactionTypeMessage,
				]);
			} else {
				setErrorMessages((messages) => [
					...messages.filter(message => 
						message !== invalidTransactionTypeMessage)
				]);
			}
		});
	};

	const validateDate = (inputData) => { //checks if the date format is valid
		inputData.forEach((row, index) => {
			const dateElements = row[row.length - 1].split("-");
			let invalidDateFormat = "Invalid date format on line";
			if (
				dateElements[0].length !== 2 ||
				dateElements[1].length !== 2 ||
				dateElements[2].length !== 4
			) {
				invalidDateFormat += ` ${index + 1}.`;
				setErrorMessages((prevMessages) => [
					...prevMessages.filter((message) =>
						message !== invalidDateFormat
					),
					invalidDateFormat,
				]);
			} else {
				setErrorMessages((messages) => [
					...messages.filter(message => message !== invalidDateFormat)
				]);
			}
		});
	};

	const validateAmount = (inputData) => { //checks if the currency format is valid - 100.00 or 100,00
		inputData.forEach((row, index) => {
			const amount = row[2];
			let invalidCurrencyFormat = "Invalid currency format on line";
			if (isNaN(amount)) {
				invalidCurrencyFormat += ` ${index + 1}`;
				setErrorMessages((prevMessages) => [
					...prevMessages.filter((message) =>
						message !== invalidCurrencyFormat
					),
					invalidCurrencyFormat,
				]);
			} else {
				setErrorMessages((messages) => [
					...messages.filter(message => message !== invalidCurrencyFormat)
				]);
			}
		});
	};

	return {
		validateTransactionType,
		validateDate,
		validateAmount,
	};
};
