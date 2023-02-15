const fs = require('fs/promises');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const db = require('./db.json');
const secret = "myveryverysecretsecret";

async function saveDb(){
	const data = JSON.stringify(db, null, 2);

	await fs.writeFile('./db.json', data);
}

exports.registerUser = async (username, password) => {
	if (db.users.some(x => x.username === username)) {
		throw 'User already exists!'
	}

	const salt = await bcrypt.genSalt(10);
	const hash = await bcrypt.hash(password, salt);

	db.users.push({
		username,
		password: hash
	});

	await saveDb();
}

exports.loginUser = async (username, password) => {
	const user = db.users.find(x => x.username === username);

	if (!user) {
		throw "No such username or password!";
	}

	const isAuthenticated = await bcrypt.compare(password, user.password);

	if(!isAuthenticated) {
		throw "No such username or password!";
	}

	const payload = { username: user.username }
	const options = { expiresIn: "1h" };
	const token = jwt.sign(payload, secret, options);

	console.log(token);

	return token;
};