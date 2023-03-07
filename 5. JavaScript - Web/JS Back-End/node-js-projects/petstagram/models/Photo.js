const mongoose = require("mongoose");

const photoSchema = new mongoose.Schema({
	name: {
		type: String,
		minLength: 2,
		required: true,
	},
	image: {
		type: String,
		required: true,
	},
	age: {
		type: Number,
		required: true,
		min: 1,
		max: 100
	},
	description: {
		type: String,
		required: true,
	},
	location: {
		type: String,
		required: true,
	},
	owner: {
		type: mongoose.Types.ObjectId,
		ref: "User",
	},
	commentList: [
		{
			type: mongoose.Types.ObjectId,
			ref: "User",
		},
	],
});

const Photo = mongoose.model("Photo", photoSchema);

module.exports = Photo;
