const path = require('path');
const is = require("is");
const calc = require("./calculator");

console.log(calc(1, 2));

console.log(is.array([]));

console.log(path.resolve('./'));