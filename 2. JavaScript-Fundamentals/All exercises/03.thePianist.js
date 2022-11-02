function thePianist(input) {
	let piecesCount = Number(input.shift());
	let store = {};

	for (let i = 0; i < piecesCount; i++) {
		let [piece, composer, tone] = input.shift().split("|");
		if (!store.hasOwnProperty(piece)) {
			store[piece] = {};
		}
		store[piece][composer] = tone;
	}

	let commandParser = {
		Add: (store, pieceToAdd, composerToAdd, toneToAdd) => {
			if (!store.hasOwnProperty(pieceToAdd)) {
				store[pieceToAdd] = {};
				store[pieceToAdd][composerToAdd] = toneToAdd;
				console.log(
					`${pieceToAdd} by ${composerToAdd} in ${toneToAdd} added to the collection!`
				);
			} else {
				console.log(`${pieceToAdd} is already in the collection!`);
			}
			return store;
		},
		Remove: (store, pieceToRemove) => {
			if (store.hasOwnProperty(pieceToRemove)) {
				console.log(`Successfully removed ${pieceToRemove}!`);
				delete store[pieceToRemove];
			} else {
				console.log(
					`Invalid operation! ${pieceToRemove} does not exist in the collection.`
				);
			}
			return store;
		},
		ChangeKey: (store, pieceChange, newTone) => {
			if (store.hasOwnProperty(pieceChange)) {
				for (const [key, value] of Object.entries(store[pieceChange])) {
					store[pieceChange][key] = newTone;
				}
				console.log(`Changed the key of ${pieceChange} to ${newTone}!`);
			} else {
				console.log(`Invalid operation! ${pieceChange} does not exist in the collection.`);
			}
			return store;
		},
	};

	input.forEach((line) => {
		let [command, ...tokens] = line.split("|");
		if (command !== "Stop") {
			store = commandParser[command](store, ...tokens);
		}
	});

	for (const [piece, composerTone] of Object.entries(store)) {
		for (const [composer, tone] of Object.entries(composerTone)) {
			console.log(`${piece} -> Composer: ${composer}, Key: ${tone}`);
		}
	}
}
thePianist([
	"3",
	"Fur Elise|Beethoven|A Minor",
	"Moonlight Sonata|Beethoven|C# Minor",
	"Clair de Lune|Debussy|C# Minor",
	"Add|Sonata No.2|Chopin|B Minor",
	"Add|Hungarian Rhapsody No.2|Liszt|C# Minor",
	"Add|Fur Elise|Beethoven|C# Minor",
	"Remove|Clair de Lune",
	"ChangeKey|Moonlight Sonata|C# Major",
	"Stop",
]);

/*
function thePianist(input) {
	let piecesCount = Number(input.shift());
	let store = {};

	for (let i = 0; i < piecesCount; i++) {
		let [piece, composer, tone] = input.shift().split("|");
		if (!store.hasOwnProperty(piece)) {
			store[piece] = {};
			store[piece][composer] = tone;
		}
	}
	for (const line of input) {
		let [command, ...tokens] = line.split("|");
		if (command === "Stop") {
			break;
		}

		switch (command) {
			case "Add":
				let pieceToAdd = tokens[0];
				if (!store.hasOwnProperty(pieceToAdd)) {
					let composerToAdd = tokens[1];
					let toneToAdd = tokens[2];
					store[pieceToAdd] = {};
					store[pieceToAdd][composerToAdd] = toneToAdd;
					console.log(
						`${pieceToAdd} by ${composerToAdd} in ${toneToAdd} added to the collection!`
					);
				} else {
					console.log(`${pieceToAdd} is already in the collection!`);
				}
				break;
			case "Remove":
				let pieceToRemove = tokens[0];
				if (store.hasOwnProperty(pieceToRemove)) {
					delete store[pieceToRemove];
					console.log(`Successfully removed ${pieceToRemove}!`);
				} else {
					console.log(
						`Invalid operation! ${pieceToRemove} does not exist in the collection.`
					);
				}
				break;
			case "ChangeKey":
				let pieceChange = tokens[0];
				if (store.hasOwnProperty(pieceChange)) {
					let newTone = tokens[1];
					for (const [key, value] of Object.entries(store[pieceChange])) {
						store[pieceChange][key] = newTone;
					}
					console.log(`Changed the key of ${pieceChange} to ${newTone}!`);
				} else {
					console.log(
						`Invalid operation! ${pieceChange} does not exist in the collection.`
					);
				}
				break;
		}
	}
	for (const [piece, komposerTone] of Object.entries(store)) {
		for (const [composer, tone] of Object.entries(komposerTone)) {
			console.log(`${piece} -> Composer: ${composer}, Key: ${tone}`);
		}
	}
}
thePianist([
	"3",
	"Fur Elise|Beethoven|A Minor",
	"Moonlight Sonata|Beethoven|C# Minor",
	"Clair de Lune|Debussy|C# Minor",
	"Add|Sonata No.2|Chopin|B Minor",
	"Add|Hungarian Rhapsody No.2|Liszt|C# Minor",
	"Add|Fur Elise|Beethoven|C# Minor",
	"Remove|Clair de Lune",
	"ChangeKey|Moonlight Sonata|C# Major",
	"Stop",
]);

*/
