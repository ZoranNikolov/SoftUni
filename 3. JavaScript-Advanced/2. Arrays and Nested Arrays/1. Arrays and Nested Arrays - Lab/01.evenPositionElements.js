function evenPositionElements(array) {
	let res = []

	for (let index = 0; index < array.length; index+=2) {
		res.push(array[index])		
	}
	console.log(res.join(' '));
}
evenPositionElements(["20", "30", "40", "50", "60"]);
evenPositionElements(["5", "10"]);
