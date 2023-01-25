function listProcessor(commandsArray) {
	let list = [];
	let commandParser = {
		add(string) {
			list.push(string);
		},
		remove(string) {
			list = list.filter(function (item) {
				return item !== string;
			});
		},
		print() {
			console.log(list.join(","));
		},
	};
	commandsArray.forEach((el) => {
		if (el === "print") {
			commandParser[el]();
		} else {
			let [command, arg] = el.split(" ");
			commandParser[command](arg);
		}
	});
}
listProcessor(["add hello", "add again", "remove hello", "add again", "print"]);
