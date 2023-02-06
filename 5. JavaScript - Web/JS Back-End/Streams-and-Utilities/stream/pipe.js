const fs = require("fs");

const readStream = fs.createReadStream("./stream/data.txt");
const writeStream = fs.createWriteStream("./stream/data-copy.txt");

readStream.pipe(writeStream);
