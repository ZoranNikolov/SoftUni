function oddAndEvenSumAlternative(number) {

  let numAsString = number.toString();
  let evenSum = 0
  let oddSum = 0
  
  for (let index = 0; index < numAsString.length; index++) {

    let singleNumber = Number(numAsString[index])

    singleNumber % 2 === 0 ?
      evenSum += singleNumber :
      oddSum += singleNumber
  }

  console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);

}
oddAndEvenSumAlternative(1000435)
/*
function oddAndEvenSum(num) {
  let oddSum = 0;
  let evenSum = 0;
  let numberToString = num.toString();

  for (let char of numberToString) {
    let currentNumber = Number(char);
    if (currentNumber % 2 == 0) {
      evenSum += currentNumber;
    } else {
      oddSum += currentNumber;
    }
  }
  console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}
oddAndEvenSum(1000435);
oddAndEvenSum(3495892137259234);
*/