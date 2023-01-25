function calculator() {
	let selector1;
	let selector2;
	let resultSelector;

	return {
		init: (selector1, selector2, resultSelector) => {
			selector1 = document.getElementById(selector1)
			selector2 = document.getElementById(selector2)
		},
		add: () => {},
		substract: () => {},
	};
}

const calculate = calculator (); 
calculate.init ('#num1', '#num2', '#result'); 
