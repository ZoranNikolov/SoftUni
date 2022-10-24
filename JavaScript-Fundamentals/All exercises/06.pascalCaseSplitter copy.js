function pascalCaseSplitter(string) {

	let arr = []
	let index = 1;
	let end = string.length
	let cut = 0
	while (index < end) {
		if (string.charCodeAt(index) >= 65 && string.charCodeAt(index) <= 90) {
			arr.push(string.slice(cut, end))
			cut = index
		}
		index++
	}
	arr.push(string.slice(cut, end))
	for (let i = 0; i < arr.length; i++) {
		arr[i] = arr[i].replace(arr[i + 1], '')

	}
	console.log(arr.join(', '));
}
pascalCaseSplitter('HoldTheDoor')