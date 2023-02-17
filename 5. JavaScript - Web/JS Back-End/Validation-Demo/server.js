const express = require('express');
const validator = require('validator');
const { body } = require("express-validator");

const validators = require('./validators');
const { isEmail } = require('./middlewares/validatorMiddleware')

const app = express(); 

app.use(express.urlencoded({extended: false}));

app.get('/', (req, res) => {
	res.send(`
	<h1>Hello</h1>

	<p><a href="/login">Login</a></p>
	<p><a href="/register">Register</a></p>
	<p><a href="/profile">Profile</a></p>
	<p><a href="/logout">Logout</a></p>
	`)
})

app.get('/login', (req, res) => {
	res.send(`
	<h1>Sign In</h1>
	<form method="POST">
		<label for="email">Email</label>
		<input type="text" id="email" name="email"/>

		<label for="password">Password</label>
		<input type="password" name="password" id="password"/>

		<input type="submit" value="login"/>
	</form>
	`);
});

app.post('/login', isEmail, (req, res) => {
	const { email, password } = req.body;

	// const errors = validationResult(req)
	// if(!errors.isEmpty()) {
	// 	res.status(400).json(errors);
	// }

	// if(!validators.isEmail(email)) {
	// 	return res.redirect('/404')
	// }

	console.log(password);
	if(!validator.isStrongPassword(password)) {
		return res.redirect('/404')
	}

	res.redirect('/');
});

app.get('/404', (req, res) => {
	res.send('Not found!')
});

app.listen(5000, () => console.log('Server is listening on port 5000...'))