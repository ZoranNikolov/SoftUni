function primeNumberChecker(num) {
  let isPrime = true;

  for (let i = 2; i < num; i++) {
    if (num % i == 0) {
      isPrime = false;
    }
  }
  if (isPrime) {
    console.log("true");
  } else {
    console.log("false");
  }
}
primeNumberChecker(7);
primeNumberChecker(8);
primeNumberChecker(81);
