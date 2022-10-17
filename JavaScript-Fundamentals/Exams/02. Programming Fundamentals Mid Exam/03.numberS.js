function nums(input) {

	let arr = input.split(' ').map(Number);
	let avg = arr.reduce((acc, val) => acc + val, 0) / arr.length
	let filtered = arr.filter(x => x > avg)

	if (filtered.length > 0) {
		let sorted = filtered.sort((a, b) => b - a).slice(0, 5)
		console.log(sorted.join(' '));
	} else {
		console.log('No');
	}
}
nums('5 2 3 4 -10 30 40 50 20 50 60 60 51')
nums('1')
nums('10 20 30 40 50')