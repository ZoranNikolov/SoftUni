function equalSumsEvenOddPosition(input) {
  let start = Number(input[0]);
  let end = Number(input[1]);

  let printLine = "";

  for (let i = start; i <= end; i++) {
    let curNum = "" + i;
    let oddSum = 0;
    let evenSum = 0;

    for (let j = 0; j <= curNum.length; j++) {
      let curDigit = Number(curNum.charAt(j));
      if (j % 2 === 0) {
        evenSum += curDigit;
      } else {
        oddSum += curDigit;
      }
    }
    if (oddSum === evenSum) {
      printLine += `${curNum} `;
    }
  }
  console.log(printLine);
}
equalSumsEvenOddPosition(["100115", "100120"]);
