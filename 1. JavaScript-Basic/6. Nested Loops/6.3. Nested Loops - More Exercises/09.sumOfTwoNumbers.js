function sumOfTwoNumbers(input) {
  let start = Number(input[0]);
  let end = Number(input[1]);
  let magicNumber = Number(input[2]);
  let isFound = false;
  let counter = 0;

  for (let x = start; x <= end; x++) {
    for (let y = start; y <= end; y++) {
      counter++;
      let result = x + y;
      if (result === magicNumber) {
        console.log(`Combination N:${counter} (${x} + ${y} = ${result})`);
        isFound = true;
        break;
      }
    }
    if (isFound) {
      break;
    }
  }
  if (!isFound) {
    console.log(`${counter} combinations - neither equals ${magicNumber}`);
  }
}
sumOfTwoNumbers(["1", "10", "5"]);
sumOfTwoNumbers(["88", "888", "1000"]);
sumOfTwoNumbers(["23", "24", "20"]);
sumOfTwoNumbers(["88", "888", "2000"]);
