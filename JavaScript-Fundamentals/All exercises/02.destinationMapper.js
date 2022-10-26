function destinationMapper(input) {
	let pattern = /([=\/])[A-Z][A-Za-z]{2,}\1/g;
	let match = input.match(pattern);
	let travelPoints = 0;
	let destinations = [];

	if (match) {
		match.forEach((el, i) => {
			if (el[0] === el[el.length - 1]) {
				el = el.substring(1, el.length - 1);
				travelPoints += el.length;
				destinations.push(el);
			}
		});
	}

	console.log(`Destinations: ${destinations.join(", ")}`);
	console.log(`Travel Points: ${travelPoints}`);
}
destinationMapper("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=");
destinationMapper("ThisIs some InvalidInput");
