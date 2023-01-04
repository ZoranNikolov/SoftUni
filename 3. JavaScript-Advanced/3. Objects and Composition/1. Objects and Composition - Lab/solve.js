// let student = {
// 	name: "Ivan",
// 	age: 18,
// 	grade: 6,
// 	city: "Sofia",
// };

// // let { name, ...rest } = student;

// let someOtherObject = {
// 	address: "Kulata",
// 	age: 23,
// 	country: "Bulgaria",
// };

// // let anotherStudent = Object.assign({}, student);

// // let anotherStudent = Object.assign(someOtherObject, student);

// let anotherStudent = { ...student };

// student.name = "Ivan Ivanov";

// console.log(student);
// console.log(anotherStudent);

// let cat = { name: "sharo", age: 5, color: "mixed" };

// // for (const key in cat) {
// // 	console.log(key, cat[key]);
// // }

// console.log(Object.keys(cat));
// console.log(Object.values(cat));
// console.log(Object.entries(cat)[0],Object.entries(cat)[1],Object.entries(cat)[2]);

// let phoneBook = {};

// phoneBook["Maria"] = "5";
// phoneBook["Iva"] = "4";
// phoneBook["Gosho"] = "2";
// phoneBook["Ana"] = "10";

// const sorted = {};

// let result = Object.entries(phoneBook)
// 	.sort((first, second) => {
// 		if (first[0] < second[0]) {
// 			return 1;
// 		}
// 		if (first[0] > second[0]) {
// 			return -1;
// 		}
// 		return 0;
// 	})
// 	.forEach((pair) => {
// 		let key = pair[0];
// 		let value = pair[1];
// 		sorted[key] = value;
// 	});

// console.log(sorted);

// let result = Object.entries(phoneBook)
// 	.sort((first, second) => {
// 		if (first[0] < second[0]) {
// 			return 1;
// 		}
// 		if (first[0] > second[0]) {
// 			return -1;
// 		}
// 		return 0;
// 	})
// 	.reduce((sorted, current) => {
// 		let key = current[0];
// 		let value = current[1];
// 		sorted[key] = value;
// 		return sorted;
// 	}, {});

// 	console.log(result);

// function solve(input) {
// 	return (townData = input
// 		.map((element) => {
// 			let data = element.split(" <-> ");

// 			return {
// 				name: data[0],
// 				population: Number(data[1]),
// 			};
// 		})
// 		.reduce((result, town) => {
// 			if (result[town.name] === undefined) {
// 				result[town.name] = town.population;
// 			} else {
// 				result[town.name] += town.population;
// 			}
// 			return result;
// 		}, {}));
// }
// console.log(
// 	solve([
// 		"Istanbul <-> 1000000",
// 		"Jeruaselm <-> 1000000",
// 		"London <-> 1000000",
// 		"London <-> 2000",
// 	])
// );

// function solve(input) {}

// let cat = {
// 	name: "Sharo",
// 	age: 5,
// 	sayHello() {
// 		return this.name + ": Meow!";
// 	},
// };
// let func = cat.sayHello;

// console.log(func(), cat.sayHello());

// let dog = {
// 	name: "Dog",
// 	color: "green",
// };

// dog.bark = func;

// console.log(dog.bark());

// function solve(commands) {
// 	let count = 0;

// 	const parser = {
// 		chop: x => x / 2,
// 		dice: x =>
// 	};

// 	for (const command of commands) {
// 		parser[command]();
// 	}
// 	console.log(count);
// }
// solve(["increment", "increment", "decrement", "reset"]);

// let owner = {
// 	firstName: "John",
// 	lastName: "Connor",
// 	address: {
// 		country: "USA",
// 		state: "Arizona",
// 	},
// };

// let cat = {
// 	name: "Sharo",
// 	age: 5,
// 	owner,
// };
// console.log(cat.owner.address.state);
// console.log(cat.owner.address);

// let rect = {
// 	width: 100,
// 	height: 200,
// 	area() {
// 		return this.width + this.height;
// 	},
// };

// console.log(rect.area());

// function createRect(width, height) {
// 	let rect = { width, height };

// 	rect.area = () => rect.width * rect.height;
// 	return rect;
// }

// let rectangle = createRect(100, 200);

// let areaFunc = rectangle.area;

// console.log(areaFunc());

// function solve(library, orders) {
// 	let result = [];

// 	for (const { template, parts } of orders) {
// 		let order = Object.assign({}, template);

// 		for (const part of parts) {
// 			let func = library[part];
// 			order[part] = func;
// 		}

// 		result.push(order);
// 	}
// 	return result;
// }
// console.log(
// 	solve(
// 		{
// 			doA: () => {
// 				/* … */
// 			},
// 			doB: () => {
// 				/* … */
// 			},
// 			doC: () => {
// 				/* … */
// 			},
// 		},
// 		[
// 			{ template: { id: "first" }, parts: ["doB"] },
// 			{ template: { id: "second" }, parts: ["doA", "doC"] },
// 		]
// 	)
// );

function createAssemblyLine() {
	return {
		hasClima(car) {
			car.temp = 21;
			car.tempSettings = 21;
			car.adjustTemp = () => {
				if (car.temp < car.tempSettings) {
					car.temp++;
				} else if (car.temp > car.tempSettings) {
					car.temp--;
				}
			};
		},
		hasAudio(car) {
			car.nowPlaying = function () {
				if (
					this.currentTrack !== null &&
					this.currentTrack !== undefined
				) {
					console.log(
						`Now playing '${this.currentTrack.name}' by ${this.currentTrack.artist}`
					);
				}
			};
		},
		hasParktronic(car) {},
	};
}

const assemblyLine = createAssemblyLine();

const myCar = {
	make: "Toyota",
	model: "Avensis",
};

assemblyLine.hasAudio(myCar);
myCar.currentTrack = {
	name: "Never Gonna Give You Up",
	artist: "Rick Astley",
};
myCar.nowPlaying();
