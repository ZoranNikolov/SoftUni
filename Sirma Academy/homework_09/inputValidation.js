import {
	messageBoxLogin,
	messageBoxSignUp,
	usernameInputLogIn,
	passwordInputLogIn,
	usernameInputSignUp,
	firstNameInput,
	lastNameInput,
	emailInput,
	phoneInput,
	passwordInputSignUp,
	repeatPasswordInput,
} from "./index.js";

function loginInputDataValidation(event) {
	event.preventDefault();
	messageBoxLogin.textContent = "";
	let isError = false;
	let errors = [];
	const username = usernameInputLogIn.value.trim();
	const password = passwordInputLogIn.value.trim();

	if (username.length === 0) {
		errors.push("Username cannot be empty!");
		isError = true;
	} else if (username.length < 6 || username.includes(" ")) {
		errors.push("Wrong username and/or password!");
		isError = true;
	}

	if (password.length === 0) {
		errors.push("Password cannot be empty!");
		isError = true;
	} else if (password.includes(" ") || password.length < 6) {
		errors.push("Wrong username and/or password!");
		isError = true;
	}

	errors.forEach((error) => {
		let message = document.createElement("li");
		message.textContent = error;
		messageBoxLogin.appendChild(message);
	});

	if (isError) {
		messageBoxLogin.style.color = "red";
		messageBoxLogin.style.display = "block";
		let ul = document.querySelector("#loginForm ul");
		ul.style.listStyleType = "none";
		ul.style.padding = "0px";
	} else {
		messageBoxLogin.textContent = "You logged in successfully!";
		messageBoxLogin.style.color = "green";
		messageBoxLogin.style.display = "block";
		document.querySelectorAll("#loginForm input").forEach((input) => {
			if (input.type !== "submit") {
				input.value = "";
			}
		});
	}
}

function signUpInputDataValidation(event) {
	messageBoxSignUp.textContent = "";
	let isError = false;
	let errors = [];
	event.preventDefault();

	const username = usernameInputSignUp.value;
	const firstName = firstNameInput.value;
	const lastName = lastNameInput.value;
	const email = emailInput.value;
	const phone = phoneInput.value;
	const password = passwordInputSignUp.value;
	const repeatPassword = repeatPasswordInput.value;

	if (username.length === 0) {
		errors.push("Username cannot be empty!");
		isError = true;
	} else if (username.length < 6) {
		errors.push("Username cannot be less than six characters long!");
		isError = true;
	}

	if (firstName.length === 0) {
		errors.push("First name cannot be empty!");
		isError = true;
	} else if (!conainsOnlyLetters(firstName)) {
		errors.push("First name can contain only letters!");
		isError = true;
	}

	if (lastName.length === 0) {
		errors.push("Last name cannot be empty!");
		isError = true;
	} else if (!conainsOnlyLetters(lastName)) {
		errors.push("Last name can contain only letters!");
		isError = true;
	}

	if (email.length === 0) {
		errors.push("Email cannot be empty!");
		isError = true;
	} else if (!emailCheck(email)) {
		errors.push("Invalid email!");
		isError = true;
	}

	if (phone.length === 0) {
		errors.push("Phone number cannot be empty!");
		isError = true;
	} else if (!phoneCheck(phone)) {
		errors.push("Phone number can contain only digits!");
		isError = true;
	}

	if (password.length === 0) {
		errors.push("Password cannot be empty!");
		isError = true;
	} else if (password.includes(" ")) {
		errors.push("Password cannot contain empty spaces!");
		isError = true;
	} else if (password.length < 8) {
		errors.push("Password must be at least 8 characters long!");
		isError = true;
	}

	if (repeatPassword.length === 0) {
		errors.push("Repeated password cannot be empty!");
		isError = true;
	} else if (repeatPassword !== password) {
		errors.push("Password and repeated password do not match!");
		isError = true;
	}

	errors.forEach((error) => {
		let message = document.createElement("li");
		message.textContent = error;
		messageBoxSignUp.appendChild(message);
	});

	if (isError) {
		messageBoxSignUp.style.color = "red";
		messageBoxSignUp.style.display = "block";
		let ul = document.querySelector("#signUpForm ul");
		ul.style.listStyleType = "none";
		ul.style.padding = "0px";
	} else {
		messageBoxSignUp.textContent = "You signed up successfully!";
		messageBoxSignUp.style.color = "green";
		messageBoxSignUp.style.display = "block";
		document.querySelectorAll("#signUpForm input").forEach((input) => {
			if (input.type !== "submit") {
				input.value = "";
			}
		});
	}
}

// Functions checking user input
function conainsOnlyLetters(str) {
	return /^[a-zA-Z]+$/.test(str);
}

function emailCheck(email) {
	return /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/g.test(email);
}

function phoneCheck(phone) {
	return /^\d+$/.test(phone);
}

export { loginInputDataValidation, signUpInputDataValidation };