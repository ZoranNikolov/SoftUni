// Check largest number

let largestNumA = Number(prompt("Checking the largest of three numbers.\nPlease, enter the first number."));
let largestNumB = Number(prompt("Checking the largest of three numbers.\nPlease, enter the second number."));
let largestNumC = Number(prompt("Checking the largest of three numbers.\nPlease, enter the third number."));
let largestNumber;

if (largestNumA >= largestNumB && largestNumA >= largestNumC) {
	largestNumber = largestNumA;
} else if (largestNumB >= largestNumA && largestNumB >= largestNumC) {
	largestNumber = largestNumB;
} else {
	largestNumber = largestNumC;
}
console.log(`The largest number is ${largestNumber}`);

// Check smallest number

let smallestNumA = Number(prompt("Checking the smallest of three numbers.\nPlease, enter the first number."));
let smallestNumB = Number(prompt("Checking the smallest of three numbers.\nPlease, enter the second number."));
let smallestNumC = Number(prompt("Checking the smallest of three numbers.\nPlease, enter the third number."));
let smallestNumber;

if (smallestNumA <= smallestNumB && smallestNumA <= smallestNumC) {
	smallestNumber = smallestNumA;
} else if (smallestNumB <= smallestNumA && smallestNumB <= smallestNumC) {
	smallestNumber = smallestNumB;
} else {
	smallestNumber = smallestNumC;
}
console.log(`The smallest number is ${smallestNumber}`);

// Check equality of two numbers

let equalNumA = Number(prompt("Checking the equality of two numbers.\nPlease, enter the first number."));
let equalNumB = Number(prompt("Checking the equality of two numbers.\nPlease, enter the second number."));
let isEqual = false;

if (equalNumA === equalNumB) {
	isEqual = true;
}
console.log(isEqual)

// Check if two numbers are positive

let positiveNumA = Number(prompt("Checking if both numbers are positive.\nPlease, enter the first number."));
let positiveNumB = Number(prompt("Checking if both numbers are positive.\nPlease, enter the second number."));
let isPositive = false;

if (positiveNumA > 0 && positiveNumB > 0) {
	isPositive = true
}
console.log(isPositive);

// Check if two numbers are negative

let negativeNumA = Number(prompt("Checking if both numbers are negative.\nPlease, enter the first number."));
let negativeNumB = Number(prompt("Checking if both numbers are negative.\nPlease, enter the second number."));
let isNegative = false;

if (negativeNumA < 0 && negativeNumB < 0) {
	isNegative = true
}
console.log(isNegative);

// Check if the value of any of two numbers is 10 or the sum of the two numbers is 10

let numToCheck10A = Number(prompt("Checking if the value of any of two numbers is 10 or their sum is 10.\nPlease, enter the first number."));
let numToCheck10B = Number(prompt("Checking if the value of any of two numbers is 10 or their sum is 10.\nPlease, enter the second number."));
let isSumOrValue10 = false;

if ((numToCheck10A === 10 || numToCheck10B === 10) || 
	(numToCheck10A + numToCheck10B === 10)) {
	isSumOrValue10 = true;
}
console.log(isSumOrValue10);

// Check if the division remainder of two numbers is 0

let numCheckRemainderA = Number(prompt("Checking if the division remainder of two numbers is 0.\nPlease, enter the first number."));
let numCheckRemainderB = Number(prompt("Checking if the division remainder of two numbers is 0.\nPlease, enter the second number."));

let isRemainder = numCheckRemainderA % numCheckRemainderB == 0 ? true : false;

console.log(isRemainder);

// Check if the number is odd or even

let numCheckOddOrEven = Number(prompt("Checking if the number is odd or even.\nPlease, enter the number."));
let oddOrEven = numCheckOddOrEven % 2 === 0 ? "even" : "odd";

console.log(oddOrEven);

// Check student grade

let studentScore = Number(prompt("Checking student's grade based on student's score.\nPlease, enter the score (0-100)."));
let grade;
let message;

if (studentScore < 0 || studentScore > 100 || isNaN(studentScore)) {
	message = "Invalid score. Please enter score between 0 and 100.";
} else {
	if (studentScore <= 50) {
		grade = "F";
	} else if (50 < studentScore && studentScore <= 60) {
		grade = "D";
	} else if (60 < studentScore && studentScore <= 75) {
		grade = "C";
	} else if (75 < studentScore && studentScore <= 94) {
		grade = "B";
	} else {
		grade = "A";
	}
}

// If variable grade is truthy value, then we print the students's grade. 
// If the variable grade is falsy value (undefined), we print the invalid score message.

if (grade) { 
	console.log(`Student's grade is ${grade}.`);
} else {
	console.log(message);
}

// Check the damage dealt for a second, minute and hour

let damageNumber = Number(prompt("Checking damage dealt for a second, minute and hour.\nPlease, enter the damage."))
let speedNumber = Number(prompt("Checking damage dealt for a second, minute and hour.\nPlease, enter the speed."))
let second = 1;
let minute = second * 60;
let hour = minute * 60;

let damagePerSecond = damageNumber * speedNumber * second;
let damagePerMinute = damageNumber * speedNumber * minute;
let damagePerHour = damageNumber * speedNumber * hour;

console.log(`Damage per second: ${damagePerSecond}\n
			 Damage per minute: ${damagePerMinute}\n
			 Damage per hour: ${damagePerHour}`)