function deckOfCards(input) {
	let listOfCards = input.shift().split(", ");
	let num = Number(input.shift());

	for (const line of input) {
		let tokens = line.split(", ");
		let command = tokens.shift();

		switch (command) {
			case "Add":
				let cardToAdd = tokens[0];
				if (!listOfCards.includes(cardToAdd)) {
					listOfCards.push(cardToAdd);
					console.log("Card successfully added");
				} else {
					console.log("Card is already in the deck");
				}
				break;
			case "Remove":
				let cardToRemove = tokens[0]
				if (listOfCards.includes(cardToRemove)) {
					let indexToRemove = listOfCards.indexOf(cardToRemove);
					listOfCards.splice(indexToRemove, 1);
					console.log("Card successfully removed");
				} else {
					console.log("Card not found");
				}
				break;
			case "Remove At":
				let removeAtIndex = Number(tokens[0]);
				if (listOfCards[removeAtIndex]) {
					listOfCards.splice(removeAtIndex, 1);
					console.log("Card successfully removed");
				} else {
					console.log("Index out of range");
				}
				break;
			case "Insert":
				let indexToInsert = Number(tokens[0]);
				let cardToInsert = tokens[1];
				if (listOfCards[indexToInsert]) {
					if (!listOfCards.includes(cardToInsert)) {
						listOfCards.splice(indexToInsert, 0, cardToInsert);
						console.log("Card successfully added");
					} else {
						console.log("Card is already added");
					}
				} else {
					console.log("Index out of range");
				}
				break;
		}
	}
	console.log(listOfCards.join(", "));
}
deckOfCards([
	"Ace of Diamonds, Queen of Hearts, King of Clubs",
	"3",
	"Add, King of Diamonds",
	"Insert, 2, Jack of Spades",
	"Remove, Ace of Diamonds",
]);
deckOfCards([
	"Two of Clubs, King of Spades, Five of Spades, Jack of Hearts",
	"2",
	"Add, Two of Clubs",
	"Remove, Five of Hearts",
]);
deckOfCards([
	"Jack of Spades, Ace of Clubs, Jack of Clubs",
	"2",
	"Insert, -1, Queen of Spades",
	"Remove At, 1",
]);
