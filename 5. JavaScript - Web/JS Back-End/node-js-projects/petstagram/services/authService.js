const User = require("../models/User");
const bcrypt = require("bcrypt");

const jwt = require("../lib/jsonwebtoken");
const { SECRET } = require("../constants");

exports.findByUsername = (username) => User.findOne({ username });

exports.findByEmail = (email) => User.findOne({ email });

exports.register = async (username, email, password, repeatPassword) => {
	if (password !== repeatPassword) {
		throw new Error("Password mismatch!");
	}

	const existingUser = await User.findOne({
		$or: [{ email }, { username }],
	});

	if (existingUser) {
		throw new Error("User exists!");
	}

	const hashedPassword = await bcrypt.hash(password, 10);

	await User.create({ username, email, password: hashedPassword });

	return this.login(username, password);
};

exports.login = async (username, password) => {
	const user = await this.findByUsername(username);
	if (!user) {
		throw new Error("Invalid username!");
	}
	
	const isValid = await bcrypt.compare(password, user.password);
	
	if (!isValid) {
		throw new Error("Invalid email or password!");
	}
	
	const payload = {
		_id: user._id,
		email: user.email,
		username: user.username,
	};

	const token = await jwt.sign(payload, SECRET);

	return token;
};
