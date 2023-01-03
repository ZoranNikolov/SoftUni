function sortAnArrayBy2Criteria(array) {
	return array.sort((a, b) => {
			return a.length - b.length || a.localeCompare(b);
		}).join("\n");
}
console.log(sortAnArrayBy2Criteria(["alpha", "beta", "gamma"]));
