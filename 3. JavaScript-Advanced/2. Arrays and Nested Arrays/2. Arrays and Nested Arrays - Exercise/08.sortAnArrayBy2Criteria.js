function sortAnArrayBy2Criteria(array) {
	let sortedArr = array.sort((a, b) => {
		if (a.length > b.length) {
			return a.length - b.length;
		} else {
			return a.localeCompare(b);
		}
	});
	console.log(sortedArr.join("\n"));
}
sortAnArrayBy2Criteria(["alpha", "beta", "gamma"]);
