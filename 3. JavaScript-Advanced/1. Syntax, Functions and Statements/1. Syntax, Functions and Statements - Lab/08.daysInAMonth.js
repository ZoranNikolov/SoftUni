function daysInMonth(month, year) {
	let tempDate = new Date(year, month, 0).getDate();
	console.log(tempDate);
}
daysInMonth(1, 2012);
