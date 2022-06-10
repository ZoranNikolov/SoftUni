function equalPairs(input) {
  let index = 0;

  let numsCount = Number(input[index++]) * 2;

  let pairResult1 = 0;
  let pairResult2 = 0;
  let num1 = 0;
  let num2 = 0;
  let currentDiff = 0;
  let maxDiff = 0;

  for (let i = 1; i < numsCount; i += 2) {
    num1 = Number(input[index++]);
    num2 = Number(input[index++]);
    pairResult1 = num1 + num2;
    if (pairResult1 != pairResult2 && i > 1) {
      currentDiff = Math.abs(pairResult1 - pairResult2);
    }
    pairResult2 = pairResult1;

    if (currentDiff > maxDiff) {
      maxDiff = currentDiff;
    }
  }
  if (currentDiff === 0) {
    console.log(`Yes, value=${pairResult2}`);
  } else {
    console.log(`No, maxdiff=${maxDiff}`);
  }
}

equalPairs(["2", "-1", "2", "0", "-1"]);
