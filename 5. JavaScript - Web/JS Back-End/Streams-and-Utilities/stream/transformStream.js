const fs = require("fs");
const zlib = require("zlib");

const gzip = zlib.createGzip();

const readStream = fs.createReadStream("./stream/data.txt");
const writeStream = fs.createWriteStream("./stream/data-transformed.txt");

readStream.pipe(gzip).pipe(writeStream);