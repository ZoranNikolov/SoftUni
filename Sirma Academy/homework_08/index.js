// Create a function that takes two numbers as arguments and returns their sum.

function sumOfTwoNumbers(firstNum, secondNum) {
	return Number(firstNum) + Number(secondNum);
}

let numAToSum = prompt('Summing two numbers. Please enter the first number.')
let numBToSum = prompt('Summing two numbers. Please enter the second number.')
console.log(`The sum of the numbers is: ${sumOfTwoNumbers(numAToSum, numBToSum)}.`);

// Write a function that takes an integer minutes and converts it to seconds.

let minutesToSecondsConverter = function(minutes) {
	return minutes * 60;
}

let minutes = prompt('Converting minutes to seconds. Please enter the minutes to convert.')
console.log(`${minutes} minutes are equal to ${minutesToSecondsConverter(minutes)} seconds.`);

// Create a function that takes a number as an argument, increments the number by +1 and returns the result.

let incrementByOne = (numberToIncrement) => Number(++numberToIncrement);

let numberToIncrement = prompt('Incrementing a number by 1. Please enter the number to increment.')
console.log(`The incremented value is ${incrementByOne(numberToIncrement)}.`)

// Write a function that converts hours into seconds.

let hoursToSecondsConverter = (hours) => {
return hours * 60 * 60
}

let hours = prompt('Converting hours to seconds. Please enter the hours to convert.')
console.log(`${hours} hours are equal to ${hoursToSecondsConverter(hours)} seconds.`)

// Create a function that takes the age in years and returns the age in days.

function ageToDaysConverter(age) {
	let days = age * 365 + Math.floor(age / 4); // Check how many leap years contains the age.
	return days
}

let age = prompt('Converting age to days. Please enter the age to convert.')
console.log(`The converted age to days is ${ageToDaysConverter(age)}.`);

// Write a function that takes the base and height of a triangle and return its area.

let triangleBase = prompt('Calculating triangle area. Please enter the base.')
let triangleHeight = prompt('Calculating triangle area. Please enter the height.')
let area = (function() {
	return (triangleBase * triangleHeight) / 2;
}());

console.log(`The area of the triangle is ${area}.`)

// Write a function that returns the remainder from two numbers

let remainder = (firstNum, secondNum) => firstNum % secondNum;

let remainderNumA = prompt('Calculating remainder of two numbers. Please enter the first number.')
let remainderNumB = prompt('Calculating remainder of two numbers. Please enter the second number.')

console.log(`The raminder is: ${remainder(remainderNumA, remainderNumB)}.`);

// Create a function that finds the maximum range of a triangle's third edge, where the side lengths are all integers.

let trianglesFirstSide = prompt('Calculating the maximum range of a triangle\'s third edge. Please enter the length of the first side.')
let trianglesSecondSide = prompt('Calculating the maximum range of a triangle\'s third edge. Please enter the length of the second side.')
console.log(`The maximum range of the triangle\'s third edge is: ${maxTriangleEdge(trianglesFirstSide, trianglesSecondSide)}.`);

// Create a function that takes length and width and finds the perimeter of a rectangle.

function maxTriangleEdge(firstSide, secondSide) {
	return Number(firstSide) + Number(secondSide) - 1;
}

let rectanglePerimeter = function(length, width){
	return 2 * (Number(length) + Number(width));
}
let rectangleLength = prompt('Calculating the perimeter of a rectangle. Please enter the length of the rectangle.')
let rectangleWidth = prompt('Calculating the perimeter of a rectangle. Please enter the width of the rectangle.')

console.log(`The perimeter of the rectangle is ${rectanglePerimeter(rectangleLength, rectangleWidth)}.`);

// Write a function that returns the string "something" joined with a space " " and the given argument a.

let concatWithSomething = (string) => 'something' + ' ' + string;
let stringToConcat = prompt('Joining the word "something" with text. Please enter the text you wish to join.')
console.log(`The joined text is: ${concatWithSomething(stringToConcat)}.`);

// Given an n-sided regular polygon n, return the total sum of internal angles (in degrees).

let sumOfAllInternalAnglesOfPolygon = (sides) => {
	return (sides - 2) * 180;
};
let polygonSides = prompt('Calculating the sum of internal angles of a polygon in degrees. Please enter the number of the polygon sides.')
console.log(`The sum of the internal angles of the polygon in degrees is: ${sumOfAllInternalAnglesOfPolygon(polygonSides)}.`);

// You are counting points for a basketball game, given the amount of 2-pointers scored and 3-pointers scored, find the final points for the team and return that value.

let twoPointersAmount = prompt('Calculating the final points of the team from the basketball game. Please, enter the amount of 2-pointers.')
let threePointersAmount = prompt('Calculating the final points of the team from the basketball game. Please, enter the amount of 3-pointers.')
let teamResult = (function (twoPointers, threePointers) {
	return 2 * twoPointers + 3 * threePointers;
})(twoPointersAmount, threePointersAmount);

console.log(`Team\'s final points: ${teamResult}.`);

// Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false.

let firstNumberToCompare = prompt('Comparing if the sum of two numbers is less than 100. Please enter the firist number.')
let secondNumberToCompare = prompt('Comparing if the sum of two numbers is less than 100. Please enter the second number.')

function compareSumOfTwoNumbersToHundred(firstNumber, secondNumber) {
	return (Number(firstNumber) + Number(secondNumber)) < 100;
}

console.log(`Is the sum of the two numbers less than 100? Result: ${compareSumOfTwoNumbersToHundred(firstNumberToCompare, secondNumberToCompare)}.`);

// Create a function that takes a base number and an exponent number and returns the calculation.

let power = (base, exponent) => Math.pow(base, exponent);
let basePow = prompt('Calculating the power of base and exponent. Please enter the base.')
let exponentPow = prompt('Calculating the power of base and exponent. Please enter the exponent.')
console.log(`${basePow} powered by ${exponentPow} is: ${(power(basePow, exponentPow))}.`);

// Create a function that takes a number n and returns the sum of all square numbers up to and including n.

let numToCalculateSquareNums = prompt('Calculating the sum of all square numbers up to a specific number. Please enter the number.')
function sumOfAllSquareNumbers(n) {
	let sum = 0;
	for (let i = 1; i <= n; i++) {
		sum += i * i;
	}
	return sum;
}

console.log(`The sum of all square numbers is: ${sumOfAllSquareNumbers(numToCalculateSquareNums)}.`);

// Create a function that calculates the number of different squares in an n * n square grid?

let gridSideSquares = prompt('Calculating the number of squares in an n * n square grid. Please enter the number of squares per grid side.')
function calcNumOfSquaresInGrid(gridSideSquares) {
	return sumOfAllSquareNumbers(gridSideSquares)
}
console.log(`The number of different squares in ${gridSideSquares} * ${gridSideSquares} grid is: ${calcNumOfSquaresInGrid(gridSideSquares)}.`);

// Create a recursive function that takes two parameters and repeats the string n number of times. The first parameter txt is the string to be repeated and the second parameter is the number of times the string is to be repeated.

let stringToRepeat = prompt('Repeating text several times. Please enter the text you wish to repeat.')
let timesToRepeat = prompt('Repeating text several times. Please enter the number of times to repeat the text.')

let repeatString = function repeatString(string, times) {
	return times <= 0 ? "" : string + repeatString(string, times - 1);
}

console.log(`The repeated string is: ${repeatString(stringToRepeat, timesToRepeat)}.`);

// Write a function that calculates the factorial of a number recursively.

let numberToCalculateFactorial = prompt('Calculating the factorial of a number. Please enter a positive number.')

let calculateFactorial = function (number) {
	if (number <= 0){
		return 1;
	} else {
		return number * calculateFactorial(number -1)
	}
}

console.log(`The factorial of ${numberToCalculateFactorial} is: ${calculateFactorial(numberToCalculateFactorial)}.`)

// Write a function that return all numbers between two given

let startNumber = prompt('Calculating all numbers between two given numbers. Please enter the start number.')
let endNumber = prompt('Calculating all numbers between two given numbers. Please enter the end number.')
let getNumsInRange = function(start, end) {
	start = Number(start)
	end = Number(end)
	
	let rangeArr = [];
	(function pushNumsToArray(start, end){
		if (start > end) {
			return 1;
		} else {
			rangeArr.push(start);
			return pushNumsToArray(start + 1, end);
		}
	}(start, end));
	return rangeArr.join(', ')
}

console.log(`The numbers between ${startNumber} and ${endNumber} are: ${getNumsInRange(startNumber, endNumber)}.`);

// A salesman has a number of cities to visit. They want to calculate the total number of possible paths they could take, visiting each city once before returning home. Return the total number of possible paths a salesman can travel, given n cities.

let citiesToVisit = prompt('Calculating the possible paths a salesman can travel, given a number of cities. Please enter number of cities to visit.')
function calculatePossibleRoutes(amountOfCities) {
	let factorial = 1;
	for (let i = 1; i < amountOfCities; i++) {
		factorial *= i;
	}
	return factorial / 2;
}
console.log(`The possible paths are: ${calculatePossibleRoutes(citiesToVisit).toFixed()}.`);

// A vehicle needs 10 times the amount of fuel than the distance it travels. However, it must always carry a minimum of 100 fuel before setting off. Create a function which calculates the amount of fuel it needs, given the distance.

let distanceToTravel = prompt('Calculating the fuel needed for certain distance. Please, enter the distance.')
let calculateFuelNeeded = (distance) => {
	let fuelConsumption = distance * 10;
	let fuelNeeded = fuelConsumption >= 100 ? fuelConsumption : 100;
	return fuelNeeded
}

console.log(`The needed fuel to travel ${distanceToTravel} is: ${calculateFuelNeeded(distanceToTravel)}.`);

// Given two strings, firstName and lastName, return a single string in the format "last, first".

let firstName = prompt('Printing first name and last name in reversed order. Please enter the first name.')
let lastName = prompt('Printing first name and last name in reversed order. Please enter the last name.')
let reversedNames = (...names) => {
	return names.reverse().join(", ");
};
console.log(`The reversed order of the names is: ${reversedNames(firstName, lastName)}.`)

// This Triangular Number Sequence is generated from a pattern of dots that form a triangle. The first 5 numbers of the sequence, or dots, are:
// 1, 3, 6, 10, 15
// This means that the first triangle has just one dot, the second one has three dots, the third one has 6 dots and so on.
// Write a function that returns the number of dots when given its corresponding triangle number of the sequence.

let triangleNumber = prompt('Calculating number of triangle dots following sequence pattern\n (1, 3, 6, 10, 15 etc.). Please enter the desired sequence number.')

function getNumberOfDots(sequenceNum) {
	sequenceNum = Number(sequenceNum);
	return (sequenceNum * (sequenceNum + 1)) / 2;
}

console.log(`The number of dots according to the position in the sequence is: ${getNumberOfDots(triangleNumber)}.`);

// Write functions to return these patterns in the console
// A)
// *
// **
// ***
// ****
// *****
// B)
//     *
//    **
//   ***
//  ****
// *****
// C)
//    *
//   ***
//  *****
// *******

let patternName = prompt('Printing dot pattern A, B or C. Please enter the desired dot pattern.')
let patternRows = 5;
let figure = "";

console.log(`You chose pattern ${patternName}. The pattern is:\n${printDotPattern(patternName)}`);

function printDotPattern(pattern) {
	switch (pattern) {
		case "A":
			return drawPatternA();
		case "B":
			return drawPatternB();
		case "C":
			return drawPatternC();
	}
}

function drawPatternA() {
	for (let i = 1; i <= patternRows; i++) {
		for (let j = 0; j < i; j++) {
			figure += '*';
		}
		figure += '\n'
	}
	return figure;
}

function drawPatternB() {
	for (let i = 1; i <= patternRows; i++) {
		for (let j = 0; j < patternRows - i; j++) {
			figure += " ";
		}
		for (let k = 0; k < i; k++) {
			figure += "*"
		}
		figure += "\n";
	}
	return figure;
}

function drawPatternC() {
	
	for (let i = 1; i <= patternRows; i++) {
		for (let j = 1; j <= patternRows - i; j++) {
			figure += " ";
		}
		for (let k = 0; k < 2*i-1; k++) {
			figure += "*"
		}
		figure += "\n";
	}
	return figure;
}

// Write a function that returns all possible combination for given letters

let firstLetter = prompt('Printing all possible combinations for given three letters. Please enter the first letter.')
let secondLetter = prompt('Printing all possible combinations for given three letters. Please enter the second letter.')
let lastLetter = prompt('Printing all possible combinations for given three letters. Please enter the last letter.')

console.log(`All possible combinations between the chosen letters are:\n${printCombinations(firstLetter,secondLetter,lastLetter)}`)

function printCombinations(...letters){
	let resArr = [];
	resArr.push(letters.slice());
	for (let i = 0; i < letters.length - 1; i++) {
		letters.splice(1, 0, letters.pop());
		for (let j = i; j < letters.length; j++) {
			letters.unshift(letters.pop());
			resArr.push(letters.slice());
		}
	}
	return resArr.join('\n');
}