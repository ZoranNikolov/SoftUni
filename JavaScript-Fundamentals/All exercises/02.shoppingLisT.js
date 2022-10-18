function shoppingList(input) {

	let list = input.shift().split('!')

	for (const line of input) {
		if (line === 'Go Shopping!') {
			break
		}
		let tokens = line.split(' ')
		let command = tokens.shift()

		switch (command) {
			case 'Urgent':
				let urgendItem = tokens[0]
				if (!list.includes(urgendItem)) {
					list.unshift(urgendItem);
				}
				break
			case 'Unnecessary':
				let unnecessaryItem = tokens[0]
				if (list.includes(unnecessaryItem)) {
					list.splice(list.indexOf(unnecessaryItem), 1)
				}
				break;
			case 'Correct':
				let [oldItem, newItem] = tokens;
				if (list.includes(oldItem)) {
					list.splice(list.indexOf(oldItem), 1, newItem)
				}
				break;
			case 'Rearrange':
				let rearrangeItem = tokens[0]
				if (list.includes(rearrangeItem)) {
					list.splice(list.indexOf(rearrangeItem), 1)
					list.push(rearrangeItem)
				}
				break;
		}
	}
	console.log(list.join(', '));
}
// shoppingList(["Tomatoes!Potatoes!Bread",
// 	"Go Shopping!",
// 	"Unnecessary Milk",
// 	"Go Shopping!",
// 	"Urgent Tomatoes",
// 	"Go Shopping!"])
shoppingList(["Milk!Pepper!Salt!Water!Banana",
	"Urgent Salt",
	"Unnecessary Grapes",
	"Correct Pepper Onion",
	"Rearrange Grapes",
	"Correct Tomatoes Potatoes",
	"Go Shopping!"])