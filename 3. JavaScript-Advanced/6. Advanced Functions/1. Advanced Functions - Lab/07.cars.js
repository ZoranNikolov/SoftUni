function cars(array) {
	let resObj = {};

	let commandParser = {
		create(name) {
			resObj[name] = {};
		},
		inherit(name, parentObjsName) {
			console.log("inherit");
			resObj[name] = {};
			resObj[name].inheritedProperties = resObj[parentObjsName];
		},
		set(name, key, value) {
			console.log("set");
			resObj[name][key] = value;
		},
		print(name) {
			for (const key in resObj[name]) {
				console.log(key, resObj[name][key]);
			}
		},
	};

	for (let line of array) {
		let [...tokens] = line.split(" ");
		let command = "";
		let name = "";
		if (tokens.length === 2) {
			command = tokens[0];
			name = tokens[1];
			commandParser[command](name);
		} else {
			if (tokens[0] === "create") {
				command = tokens[2];
				name = tokens[1];
				parentObjsName = tokens[3];
				commandParser[command](name, parentObjsName);
			} else {
				command = tokens[0];
				name = tokens[1];
				key = tokens[2];
				value = tokens[3];
				commandParser[command](name, key, value);
			}
		}
	}

	// array.forEach((line) => {
	// 	let [...tokens] = line.split(" ");
	// let command = "";
	// let name = "";
	// if (tokens.length === 2) {
	// 	command = tokens[0];
	// 	name = tokens[1];
	// 	commandParser[command](name);
	// } else {
	// 	if (tokens[0] === "create") {
	// 		command = tokens[2];
	// 		name = tokens[1];
	// 		parentObjsName = tokens[3];
	// 		commandParser[command](name, parentObjsName);
	// 	} else {
	// 		command = tokens[0];
	// 		name = tokens[1];
	// 		key = tokens[2];
	// 		value = tokens[3];
	// 		commandParser[command](name, key, value);
	// 	}
	// }
	// });
}
cars([
	"create c1",
	"create c2 inherit c1",
	"set c1 color red",
	"set c2 model new",
	"print c1",
	"print c2",
]);
