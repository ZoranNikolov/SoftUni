const fs = require("fs");

fs.writeFile("./fs/output-file.txt", "Pesho", () => {
	console.log("File created");
});
