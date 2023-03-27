export const validateInputData = () => {

	const validateUsername = (event, setErrorMessage) => {
		const name = event.target.value.trim();
		const pattern = /^\S{5,}$/g;
		const invalidUsernameMessage = { id: 1, content: "Username must be at least 6 characters long." }

		if (!pattern.test(name)) {
			setErrorMessage((prevMessages) => [
				...prevMessages.filter(message => message.id !== invalidUsernameMessage.id),
				invalidUsernameMessage,
			]);
		} else {
			setErrorMessage((messages) => [
				...messages.filter(message => message.id !== invalidUsernameMessage.id)
			]);
		}
	};

	const validateFirstName = (event, setErrorMessage) => {
		const firstName = event.target.value.trim();
		const pattern = /^[A-Za-z]+$/g;
		const invalidFirstNameMessage = { id: 2, content: "First name must contain only letters." }
		
		if (!pattern.test(firstName)){
			setErrorMessage((prevMessages) => [
				...prevMessages.filter(message => message.id !== invalidFirstNameMessage.id),
				invalidFirstNameMessage,
			]);
		} else {
			setErrorMessage((messages) => [
				...messages.filter(message => message.id !== invalidFirstNameMessage.id)
			]);
		}
	}

	const validateLastName = (event, setErrorMessage) => {
		const lastName = event.target.value.trim();
		const pattern = /^[A-Za-z]+$/g;
		const invalidLastNameMessage = { id: 3, content: "Last name must contain only letters." }

		if (!pattern.test(lastName)){
			setErrorMessage((prevMessages) => [
				...prevMessages.filter(message => message.id !== invalidLastNameMessage.id),
				invalidLastNameMessage,
			]);
		} else {
			setErrorMessage((messages) => [
				...messages.filter(message => message.id !== invalidLastNameMessage.id)
			]);
		}
	}

	const validateEmail = (event, setErrorMessage) => {
		const email = event.target.value.trim();
		const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/g;
		const invalidEmailMessage = { id: 4, content: "Invalid email format." }

		if (!pattern.test(email)){
			setErrorMessage((prevMessages) => [
				...prevMessages.filter(message => message.id !== invalidEmailMessage.id),
				invalidEmailMessage,
			]);
		} else {
			setErrorMessage((messages) => [
				...messages.filter(message => message.id !== invalidEmailMessage.id)
			]);
		}
	}
	
	const validatePhoneNumber = (event, setErrorMessage) => {
		const phoneNumber = event.target.value.trim();
		const pattern = /^(\+359|0)8[789][0-9]{7}$/g;
		const invalidPhoneNumberMessage = { id: 5, content: "Invalid phone number." }

		if (!pattern.test(phoneNumber)){
			setErrorMessage((prevMessages) => [
				...prevMessages.filter(message => message.id !== invalidPhoneNumberMessage.id),
				invalidPhoneNumberMessage,
			]);
		} else {
			setErrorMessage((messages) => [
				...messages.filter(message => message.id !== invalidPhoneNumberMessage.id)
			]);
		}
	}
	
	const validatePassword = (event, setErrorMessage) => {
		const password = event.target.value.trim();
		const pattern = /^\S{5,}$/g;
		const invalidPasswordMessage = { id: 6, content: "Password must be at least 6 characters long." }

		if (!pattern.test(password)) {
			setErrorMessage((prevMessages) => [
				...prevMessages.filter(message => message.id !== invalidPasswordMessage.id),
				invalidPasswordMessage,
			]);
		} else {
			setErrorMessage((messages) => [
				...messages.filter(message => message.id !== invalidPasswordMessage.id)
			]);
		}
	};

	const validateRepeatedPassword = (event, setErrorMessage) =>{
		const repeatedPassword = event.target.value.trim();
		const invalidRepeatedPasswordMessage = { id: 7, content: "Password and repeated password do not match." };
		const password = document.querySelector("form #password").value.trim();

		if (repeatedPassword !== password) {
			setErrorMessage((prevMessages) => [
				...prevMessages.filter(message => message.id !== invalidRepeatedPasswordMessage.id),
				invalidRepeatedPasswordMessage,
			]);
		} else {
			setErrorMessage((messages) => [
				...messages.filter(message => message.id !== invalidRepeatedPasswordMessage.id)
			]);
		}
	}
	
	return {
		validateUsername,
		validatePassword,
		validateFirstName,
		validateLastName,
		validateEmail,
		validatePhoneNumber,
		validateRepeatedPassword,
	};
}