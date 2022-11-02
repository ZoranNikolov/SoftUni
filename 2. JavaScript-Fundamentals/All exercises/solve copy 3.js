function solve() {

	let text = 'Lorem Ipsum is simply dummy standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type spe'
	let pattern = /(\d+)(s)/g

	let matches = pattern.exec(text)

	console.log(matches[2]);

}
solve()


function test() {

	let text = '2015-05-25'
	let pattern = /\d{4}-\d{2}-\d{2}/

	console.log(pattern.test(text));

}
