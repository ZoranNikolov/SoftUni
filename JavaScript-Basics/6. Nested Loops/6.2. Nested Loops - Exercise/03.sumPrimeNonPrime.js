function sumPrimeNonPrime(input) {
  let index = 0;
  let primeSum = 0;
  let nonPrimeSum = 0;

  while (input[index] !== "stop") {
    let curNum = Number(input[index]);
    if (curNum < 0) {
      console.log("Number is negative.");
    } else {
      let isPrime = true;
      for (let i = 2; i < curNum; i++) {
        if (curNum % i == 0) {
          isPrime = false;
          break;
        }
      }
      if (isPrime) {
        primeSum += curNum;
      } else {
        nonPrimeSum += curNum;
      }
    }
    index++;
  }
  console.log(`Sum of all prime numbers is: ${primeSum}`);
  console.log(`Sum of all non prime numbers is: ${nonPrimeSum}`);
}
sumPrimeNonPrime(["30", "83", "33", "-1", "20", "stop"]);
