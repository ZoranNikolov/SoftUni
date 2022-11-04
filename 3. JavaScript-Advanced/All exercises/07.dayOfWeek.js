function day(params) {
	let DayOfTheWeek = {
		Monday: 1,
		Tuesday: 2,
		Wednesday: 3,
		Thursday: 4,
		Friday: 5,
		Saturday: 6,
		Sunday: 7,
	};
	let res = DayOfTheWeek[params];
	typeof res === "undefined" ? console.log("error") : console.log(res);
}
day("Invalid");
