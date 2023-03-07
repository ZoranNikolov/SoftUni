const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
	username: {
		type: String,
		required: [true, 'Username is required!'] 
	},
	email: {
		type: String,
		required: [ true, 'Email is required!'] 
	},
	password: {
		type: String,
		required: true,
	},
});

const User = mongoose.model("User", userSchema);

module.exports = User;