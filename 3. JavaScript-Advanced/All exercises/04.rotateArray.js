function rotateArray(array, step) {
	for (let i = 0; i < step; i++) {
		array.unshift(array.pop());
	}
	console.log(array.join(" "));
}
rotateArray(["1", "2", "3", "4"], 2);
rotateArray(["Banana", "Orange", "Coconut", "Apple"], 15);
