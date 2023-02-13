const mongoose = require("mongoose");

const Cat = require("./models/Cat");

async function main() {
	mongoose.set("strictQuery", false);
	await mongoose.connect("mongodb://127.0.0.1:27017/catShelter");

	console.log("Database Connected");
	const cats = await readCats();
	cats.forEach((cat) => {
		cat.sayHello();
		console.log(cat.info);
	});

	// await readCats();
	// await saveCat('dasdsadsa', 4, 'Angora');
	// await saveCat("Mishi", 5, "Ulichna");

	let oneCat = await readCat("Mishi");
	console.log(oneCat);

	// await updateCat('Nav', 'Nebuchadnezzar II');
}

async function saveCat(name, age, breed) {
	await Cat.create({
		name,
		age,
		breed,
	});

	// const cat = new Cat({
	// 	name,
	// 	age,
	// 	breed,
	// });

	// await cat.save();
}

async function readCats() {
	const cats = await Cat.find();
	console.log(cats);
	return cats;
}

async function readCat(name) {
	const cat = await Cat.findOne({ name });
	// const cat = await Cat.findById('63e9ff2bd45f2ee9ca04d6b1')

	return cat;
}

async function updateCat(name, newName) {
	await Cat.updateOne({name}, {name: newName});
}

main();
