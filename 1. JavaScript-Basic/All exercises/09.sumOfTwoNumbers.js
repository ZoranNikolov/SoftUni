function sumOfTwoNumbers(input) {
  let start = Number(input[0]);
  let end = Number(input[1]);
  let magicNum = Number(input[2]);
  let counter = 0;
  let digitA = 0;
  let digitB = 0;
  let isFound = false;

  for (let i = start; i <= end; i++) {
    for (let j = start; j <= end; j++) {
      digitA = i;
      digitB = j;
      counter++;
      if (digitA + digitB === magicNum) {
        console.log(
          `Combination N:${counter} (${digitA} + ${digitB} = ${magicNum})`
        );
        isFound = true;
        break;
      }
    }
    if (isFound) {
      break;
    }
  }
  if (!isFound) {
    console.log(`${counter} combinations - neither equals ${magicNum}`);
  }
}
sumOfTwoNumbers(["1", "10", "5"]);
sumOfTwoNumbers(["23", "24", "20"]);
sumOfTwoNumbers(["88", "888", "1000"]);
sumOfTwoNumbers(["88", "888", "2000"]);
