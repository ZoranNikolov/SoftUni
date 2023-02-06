const fs = require("fs");
const fsp = require("fs/promises");

// Synchronous reading from file
const text = fs.readFileSync("./fs/data.txt", { encoding: "utf8" });
console.log("Read from file");
console.log(text);

// Asynchronous reading from file
fs.readFile("./fs/data.txt", { encoding: "utf8" }, (err, data) => {
	if (err) {
		return;
	}

	console.log(data);
});
console.log("Read from file");

// Asynchronous reading with promises
fsp.readFile("./fs/data.txt", { encoding: "utf8" })
	.then((result) => {
		console.log(result);
	});
console.log('Read from file');