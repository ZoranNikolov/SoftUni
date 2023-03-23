import { loginInputDataValidation, signUpInputDataValidation } from "./inputValidation.js";

const loginDiv = document.querySelector("#login");
const signUpDiv = document.querySelector("#signUp");

// Create and append login form

const loginForm = document.createElement("form");
loginForm.action = "#";
loginForm.id = "loginForm";

const loginFormHeading = document.createElement("h3");
loginFormHeading.textContent = "Log in form";
loginForm.appendChild(loginFormHeading);

const usernameInputLogIn = document.createElement("input");
usernameInputLogIn.type = "text";
usernameInputLogIn.id = "usernameLogIn";
usernameInputLogIn.placeholder = "Username";
loginForm.appendChild(usernameInputLogIn);

const passwordInputLogIn = document.createElement("input");
passwordInputLogIn.type = "password";
passwordInputLogIn.id = "passwordLogIn";
passwordInputLogIn.placeholder = "Password";
loginForm.appendChild(passwordInputLogIn);

const loginButton = document.createElement("input");
loginButton.type = "submit";
loginButton.value = "Log in";
loginButton.id = "logIn";
loginForm.appendChild(loginButton);

const loginSpan = document.createElement("span");
loginSpan.textContent = "Not a member yet? ";
const loginSpanAnchor = document.createElement("a");
loginSpanAnchor.href = "#";
loginSpanAnchor.textContent = "Sign Up!";
loginSpan.appendChild(loginSpanAnchor);
loginForm.appendChild(loginSpan);

const messageBoxLogin = document.createElement("ul");
loginForm.appendChild(messageBoxLogin);
messageBoxLogin.style.display = "none";

loginDiv.appendChild(loginForm);

// Create and append sign up form

const signUpForm = document.createElement("form");
signUpForm.action = "#";
signUpForm.id = "signUpForm";

const signUpFormHeading = document.createElement("h3");
signUpFormHeading.textContent = "Sign up form";
signUpForm.appendChild(signUpFormHeading);

const usernameInputSignUp = document.createElement("input");
usernameInputSignUp.type = "text";
usernameInputSignUp.id = "username";
usernameInputSignUp.placeholder = "Username";
signUpForm.appendChild(usernameInputSignUp);

const firstNameInput = document.createElement("input");
firstNameInput.type = "text";
firstNameInput.id = "firstName";
firstNameInput.placeholder = "First name";
signUpForm.appendChild(firstNameInput);

const lastNameInput = document.createElement("input");
lastNameInput.type = "text";
lastNameInput.id = "lastName";
lastNameInput.placeholder = "Last name";
signUpForm.appendChild(lastNameInput);

const emailInput = document.createElement("input");
emailInput.type = "text";
emailInput.id = "email";
emailInput.placeholder = "Email";
signUpForm.appendChild(emailInput);

const phoneInput = document.createElement("input");
phoneInput.type = "tel";
phoneInput.id = "phoneNumber";
phoneInput.placeholder = "Phone number";
signUpForm.appendChild(phoneInput);

const passwordInputSignUp = document.createElement("input");
passwordInputSignUp.type = "password";
passwordInputSignUp.id = "passwordSignUp";
passwordInputSignUp.placeholder = "Password";
signUpForm.appendChild(passwordInputSignUp);

const repeatPasswordInput = document.createElement("input");
repeatPasswordInput.type = "password";
repeatPasswordInput.id = "repeatPassword";
repeatPasswordInput.placeholder = "Repeat password";
signUpForm.appendChild(repeatPasswordInput);

const signUpButton = document.createElement("input");
signUpButton.type = "submit";
signUpButton.value = "Sign Up";
signUpButton.id = "signUp";
signUpForm.appendChild(signUpButton);

const signUpSpan = document.createElement("span");
signUpSpan.textContent = "Already have an account? ";
const signUpSpanAnchor = document.createElement("a");
signUpSpanAnchor.href = "#";
signUpSpanAnchor.textContent = "Log in!";
signUpSpan.appendChild(signUpSpanAnchor);
signUpForm.appendChild(signUpSpan);

const messageBoxSignUp = document.createElement("ul");
signUpForm.appendChild(messageBoxSignUp);
messageBoxSignUp.style.display = "none";

signUpDiv.appendChild(signUpForm);

const showLoginFormButton = document.querySelector("#signUp a");
const showSignUpFormButton = document.querySelector("#login a");

signUpDiv.classList.add("hidden");
showActiveForm();

// Add background color to the body element
document.querySelector("body").style.backgroundColor = "rgba(126, 126, 126, 0.5)";

// Adding event listeners to login/sign up forms and to buttons switching between both forms
loginForm.addEventListener("submit", loginInputDataValidation);
signUpForm.addEventListener("submit", signUpInputDataValidation);
showSignUpFormButton.addEventListener("click", toggleFormsAndResetMessage);
showLoginFormButton.addEventListener("click", toggleFormsAndResetMessage);

// Function that hides inactive form and resets the message shown in case of error or successfull login/sign up
function toggleFormsAndResetMessage(event) {
	event.preventDefault();
	signUpDiv.classList.toggle("hidden");
	loginDiv.classList.toggle("hidden");
	messageBoxLogin.textContent = "";
	messageBoxLogin.style.display = "none";
	messageBoxSignUp.textContent = "";
	messageBoxSignUp.style.display = "none";
	showActiveForm();
}

// Adding styles to active div
function showActiveForm() {
	const divs = document.querySelectorAll(".form");
	divs.forEach((div) => {
		if (div.classList.contains("hidden")) {
			div.style.display = "none";
		} else {
			div.style.cssText = `
			margin: 25px auto;
			display: flex;
			justify-content: center;
			align-items: center;
			`;
		}
	});
}

// Adding styles to active form
const forms = document.querySelectorAll("form");

forms.forEach((form) => {
	if (form.style.display != "none") {
		form.style.cssText = `
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
		gap: 10px;
		background-color: #F2F2F2;
		width: 330px;
		padding: 15px;
		box-sizing: border-box;
		border: 1px solid black;
		border-radius: 10px;
		font-family: Arial, Helvetica, sans-serif;
		`;
	}
});

// Adding styles to input fields and buttons in case of mouse over and mouse out
const inputFields = document.querySelectorAll("input");

inputFields.forEach((field) => {
	if (field.type !== "submit") {
		field.addEventListener("mouseover", focusInField);
		field.addEventListener("mouseout", focusOutField);
	} else {
		field.addEventListener("mouseover", () => {
			field.style.backgroundColor = "#48B46C";
		});
		field.addEventListener("mouseout", () => {
			field.style.backgroundColor = "#50C878";
		});
	}
	field.style.borderRadius = "5px";
});

function focusInField() {
	this.style.backgroundColor = "rgba(102, 102, 102, 0.171)";
}

function focusOutField() {
	this.style.backgroundColor = "";
}

document.querySelectorAll("input[type=submit]").forEach((button) => {
	button.style.cssText = `
	background-color: #50C878;
	border-radius: 5px;
	width: 25%;
	margin-top: 8px;
	margin-bottom: 8px`;
});

export {
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
};
