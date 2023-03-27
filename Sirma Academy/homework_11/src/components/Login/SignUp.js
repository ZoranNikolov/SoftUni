import { Link } from "react-router-dom";
import { useState } from "react";
import { validateInputData } from "../../utils/validateInputData";

export const SignUp = () => {
	const [username, setUsername] = useState("");
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [phoneNumber, setPhoneNumber] = useState("");
	const [password, setPassword] = useState("");
	const [repeatedPassword, setRepeatedPassword] = useState("");
	const [errorMessage, setErrorMessage] = useState([]);

	const {
		validateUsername,
		validatePassword,
		validateFirstName,
		validateLastName,
		validateEmail,
		validatePhoneNumber,
		validateRepeatedPassword,
	} = validateInputData();

	const handleUsernameChange = (event) => {
		setUsername(event.target.value);
	};

	const handleFirstNameChange = (event) => {
		setFirstName(event.target.value);
	};

	const handleLastNameChange = (event) => {
		setLastName(event.target.value);
	};

	const handleEmailChange = (event) => {
		setEmail(event.target.value);
	}

	const handlePhoneNumberChange = (event) => {
		setPhoneNumber(event.target.value);
	}

	const handlePasswordChange = (event) => {
		setPassword(event.target.value);
	};

	const handleRepeatedPasswordChange = (event)=>{
		setRepeatedPassword(event.target.value);
	}
	
	const handleSubmit = (event) => {
		event.preventDefault();
		if (errorMessage.length > 0) {
			alert(errorMessage.map((message) => message.content).join("\n"));
		}
	};
	
	errorMessage.sort((a, b) => a.id - b.id)

	return (
		<>
			<form action="" onSubmit={handleSubmit}>
				<fieldset>
					<legend>Sign up:</legend>
					<label>
						Username: <br />
						<input
							type="text"
							name="username"
							id="username"
							value={username}
							required
							onChange={handleUsernameChange}
							onBlur={(event) => validateUsername(event, setErrorMessage)}
						/>
					</label>
					<br />
					<label>
						First name: <br />
						<input
							type="text"
							name="firstName"
							id="firstName"
							value={firstName}
							required
							onChange={handleFirstNameChange}
							onBlur={(event) => validateFirstName(event, setErrorMessage)}
						/>
					</label>
					<br />
					<label>
						Last name: <br />
						<input
							type="text"
							name="lastName"
							id="lastName"
							value={lastName}
							required
							onChange={handleLastNameChange}
							onBlur={(event) => validateLastName(event, setErrorMessage)}
						/>
					</label>
					<br />
					<label>
						Email: <br />
						<input
							type="email"
							name="email"
							id="email"
							value={email}
							required
							onChange={handleEmailChange}
							onBlur={(event) => validateEmail(event, setErrorMessage)}
						/>
					</label>
					<br />
					<label>
						Phone number: <br />
						<input
							type="tel"
							name="phone"
							id="phoneNumber"
							value={phoneNumber}
							required
							onChange={handlePhoneNumberChange}
							onBlur={(event) => validatePhoneNumber(event, setErrorMessage)}
						/>
					</label>
					<br />
					<label>
						Password: <br />
						<input
							type="password"
							name="password"
							id="password"
							value={password}
							required
							onChange={handlePasswordChange}
							onBlur={(event) => validatePassword(event, setErrorMessage)}
						/>
					</label>
					<br />
					<label>
						Repeat password: <br />
						<input
							type="password"
							name="repeatPassword"
							id="repeatPassword"
							value={repeatedPassword}
							required
							onChange={handleRepeatedPasswordChange}
							onBlur={(event) => validateRepeatedPassword(event, setErrorMessage)}
						/>
					</label>
					<br />
					<label>
						<p>
							<input type="submit" value="Sign up" /> &nbsp;
							Already have an account?{" "}
							<Link to="/login">Log in!</Link>
						</p>
					</label>
				</fieldset>
			</form>
			<div className="message-container">
				{errorMessage ?
						errorMessage.map((error) => <p style={{color: 'red'}} key={error.id}>{error.content}</p>) :
						null}
			</div>
		</>
	);
};
