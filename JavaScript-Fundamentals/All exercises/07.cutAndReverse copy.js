function cutAndReverse(string) {

	let reversed = string.split('').reverse().join('');
	console.log(`${reversed.slice(reversed.length / 2)}\n${reversed.slice(0, reversed.length / 2)}`);

}
cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT')