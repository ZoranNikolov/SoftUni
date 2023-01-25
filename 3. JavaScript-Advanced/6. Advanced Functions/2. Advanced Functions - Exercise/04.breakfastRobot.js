function solution() {

	let store = {
		protein: 0,
		carbohydrate: 0,
		fat: 0,
		flavours: 0,
	};
	let recipesEnum = {
		apple: { carbohydrate: 1, flavour: 2 },
		burger: { carbohydrate: 5, fat: 7, flavour: 3 },
		lemonade: { carbohydrate: 10, flavour: 20 },
		eggs: { protein: 10, fat: 1, flavour: 1 },
		turkey: { protein: 10, carbohydrate: 10, fat: 10, flavour: 10 },
	};

	return function inputHandler(input){
		let [cmd, microelement, quantity] = input.split(' ')
	}

	function cmd(){
		return{
			
		}
	}
}

let manager = solution();
console.log(manager("restock flavour 50")); // Success
console.log(manager("prepare lemonade 4")); // Error: not enough carbohydrate in stock
