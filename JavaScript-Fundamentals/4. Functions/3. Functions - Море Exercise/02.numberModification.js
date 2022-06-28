function numberModification(modifiedNumber) {
  while (getAvg(modifiedNumber) < 5) {
    modifiedNumber += "9";
  }
  console.log(modifiedNumber);

  function getSum(number) {
    let numToString = number.toString();
    let sum = 0;
    for (let i = 0; i < numToString.length; i++) {
      sum += Number(numToString[i]);
    }
    return sum;
  }

  function getAvg(num) {
    return getSum(num) / num.toString().length;
  }
}

// function numberModification(number) {
//   const getDigitsAvg = (num) => num.toString().split("").map(Number).reduce((a, b) => a + b, 0) / num.toString().length;

//   while (getDigitsAvg(number) < 5) {
//     number += "9";
//   }
//   console.log(number);
// }

numberModification(101);
numberModification(5835);
