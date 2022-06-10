function primePairs(input) {
  let firstPairStart = Number(input[0]);
  let secondPairStart = Number(input[1]);
  let firstPairStep = Number(input[2]);
  let secondPairStep = Number(input[3]);
  let isFirstPairPrime = false;
  let isSecondPairPrime = false;

  for (let i = firstPairStart; i <= firstPairStart + firstPairStep; i++) {
    for (let j = secondPairStart; j <= secondPairStart + secondPairStep; j++) {
      let firstPair = i;
      for (let k = 2; k < firstPair; k++) {
        if (firstPair % k === 0) {
          isFirstPairPrime = false;
          break;
        }
        isFirstPairPrime = true;
      }
      let secondPair = j;
      for (let l = 2; l < secondPair; l++) {
        if (secondPair % l === 0) {
          isSecondPairPrime = false;
          break;
        }
        isSecondPairPrime = true;
      }
      if (isFirstPairPrime === true && isSecondPairPrime === true) {
        console.log(`${firstPair}${secondPair}`);
      }
    }
  }
}
primePairs(["10", "30", "9", "6"]);