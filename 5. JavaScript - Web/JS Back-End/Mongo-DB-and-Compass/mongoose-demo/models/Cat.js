const mongoose = require("mongoose");

const catSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	age: {
		type: Number,
		age: 3,
	},
	breed: String,
});

// Method
catSchema.methods.sayHello = function () {
	console.log(`Hello, my name is ${this.name} and meow! `);
};

// Virtual property
catSchema.virtual("info").get(function () {
	return `${this.name} - ${this.age} - ${this.breed}`;
});

// Validation methods
catSchema.path('name').validate(function(){
	return this.name.startsWith('N');
}, 'Name should start with N')

module.exports = mongoose.model("Cat", catSchema);