function solution() {
	let string = "";
	return {
		append: (s) => (string += s),
		removeStart: (n) => (string = string.substring(n)),
		removeEnd: (n) => (string = string.substring(0, string.length - n)),
		print: () => console.log(string),
	};
}

let secondZeroTest = solution();
secondZeroTest.append("123");
secondZeroTest.append("45");
secondZeroTest.removeStart(2);
secondZeroTest.removeEnd(1);
secondZeroTest.print();
