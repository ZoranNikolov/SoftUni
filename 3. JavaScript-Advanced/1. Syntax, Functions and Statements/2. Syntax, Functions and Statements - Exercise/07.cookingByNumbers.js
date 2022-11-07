function cooking(inputNum, ...commands) {
	commands.forEach((command) => {
		inputNum = numManipulator(inputNum, command);
	});

	function numManipulator(inputNum, command) {
		switch (command) {
			case "chop":
				inputNum /= 2;
				break;
			case "dice":
				inputNum = Math.sqrt(inputNum);
				break;
			case "spice":
				inputNum += 1;
				break;
			case "bake":
				inputNum *= 3;
				break;
			case "fillet":
				inputNum *= 0.8;
		}
		console.log(inputNum);
		return inputNum;
	}
}
cooking("32", "chop", "chop", "chop", "chop", "chop");
cooking("9", "dice", "spice", "chop", "bake", "fillet");
