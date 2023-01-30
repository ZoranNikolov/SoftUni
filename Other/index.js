//Higher order functions

// function noisy(f) {
// 	return (...args) => {
// 		console.log("calling with", args);
// 		let result = f(...args);
// 		console.log("called with", args, ", returned", result);
// 		return result;
// 	};
// }
// noisy(Math.min)(3, 2, 1);

// let roseDragon = "🌹🐉";
// for (let char of roseDragon) {
// 	console.log(char);
// }

// function countBy(items, groupName) {
// 	let counts = [];
// 	for (let item of items) {
// 		let name = groupName(item);
// 		let known = counts.findIndex((c) => c.name == name);
// 		if (known == -1) {
// 			counts.push({ name, count: 1 });
// 		} else {
// 			counts[known].count++;
// 		}
// 	}
// 	return counts;
// }
// console.table(countBy([1, 2, 3, 4, 5], (n) => n > 2));

//OOP
//Methods

// function speak(line) {
// 	console.log(`The ${this.type} rabbit says '${line}'`);
// }
// let whiteRabbit = { type: "white", speak };
// let hungryRabbit = { type: "hungry", speak };
// whiteRabbit.speak("Oh my ears and whiskers, " + "how late it's getting!");
// hungryRabbit.speak("I could use a carrot right now.");

// speak.call(hungryRabbit, "Burp!");

// function normalize() {
// 	console.log(this.coords.map((n) => n / this.length));
// }
// normalize.call({ coords: [0, 2, 3], length: 5 });

//Protorypes

// let empty = {};
// console.log(empty.toString); // → function toString(){…}
// console.log(empty.toString()); // → [object Object]

// console.log(Object.getPrototypeOf({}) == Object.prototype); // → true
// console.log(Object.getPrototypeOf(Object.prototype)); // → null

// console.log(Object.getPrototypeOf(Math.max) == Function.prototype); // → true
// console.log(Object.getPrototypeOf([]) == Array.prototype); // → true Such a prototype

// let protoRabbit = {
// 	speak(line) {
// 		console.log(`The ${this.type} rabbit says '${line}'`);
// 	},
// };
// let killerRabbit = Object.create(protoRabbit);
// killerRabbit.type = "killer";
// killerRabbit.speak("SKREEEE!"); // → The killer rabbit says 'SKREEEE!'

//Classes

function makeRabbit(type) {
	let rabbit = Object.create(protoRabbit);
	rabbit.type = type;
	return rabbit;
}

// function Rabbit(type) {
// 	this.type = type;
// }
// Rabbit.prototype.speak = function (line) {
// 	console.log(`The ${this.type} rabbit says '${line}'`);
// };
// let weirdRabbit = new Rabbit("weird");

// console.log(Object.getPrototypeOf(Rabbit) == Function.prototype); // → true
// console.log(Object.getPrototypeOf(weirdRabbit) == Rabbit.prototype); // → true

class Rabbit {
	constructor(type) {
		this.type = type;
	}
	speak(line) {
		console.log(`The ${this.type} rabbit says '${line}'`);
	}
}
let killerRabbit = new Rabbit("killer");
let blackRabbit = new Rabbit("black");

// let object = new (class {
// 	getWord() {
// 		return "hello";
// 	}
// })();
// console.log(object.getWord()); // → hello

// Rabbit.prototype.teeth = "small";
// console.log(killerRabbit.teeth); // → small
// killerRabbit.teeth = "long, sharp, and bloody";
// console.log(killerRabbit.teeth); // → long, sharp, and bloody
// console.log(blackRabbit.teeth); // → small
// console.log(Rabbit.prototype.teeth); // → small

// console.log(Array.prototype.toString == Object.prototype.toString); // → false
// console.log([1, 2].toString()); // → 1,2

// console.log(Object.prototype.toString.call([1, 2])); // → [object Array]

console.log("toString" in Object.create({})); // → true
console.log("toString" in Object.create(null)); // → false
