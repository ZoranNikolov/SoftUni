import { useState } from "react";
import { Link } from "react-router-dom";
import { validateInputData } from "../../utils/validateInputData";

export const Login = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [errorMessage, setErrorMessage] = useState([]);

	const { validateUsername, validatePassword } = validateInputData();

	const handleUsernameChange = (event) => {
		setUsername(event.target.value);
	};

	const handlePasswordChange = (event) => {
		setPassword(event.target.value);
	};

	
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
					<legend>Log in:</legend>
					<label>
						Username:
						<input
							type="text"
							name="username"
							id="username"
							value={username}
							required
							onChange={handleUsernameChange}
							onBlur={(event)=>validateUsername(event, setErrorMessage)}
						/>
					</label>
					<label>
						Password:
						<input
							type="password"
							name="password"
							id="password"
							value={password}
							required
							onChange={handlePasswordChange}
							onBlur={(event)=>validatePassword(event, setErrorMessage)}
						/>
					</label>
					<label>
						<p>
							<input type="submit" value="Log in" id="logIn" />{" "}
							&nbsp; Not a member yet?{" "}
							<Link to="/signup">Sign up!</Link>
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
