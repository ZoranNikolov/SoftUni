const fs = require("fs");

const readStream = fs.createReadStream("./stream/data.txt", { encoding: "utf8" });

readStream.on("data", (chunk) => {
	console.log("----------------------New Chunk----------------------");
	console.log(chunk);
});

readStream.on("close", () => {
	console.log("Stream closed");
});
