function sumOfOddNumbers(n) {
  let sum = 0;
  let counter = 0;

  for (let i = 1; i <= Number.MAX_SAFE_INTEGER; i++) {
    if (i % 2 != 0) {
      sum += i;
      console.log(i);
      counter++;
    }
    if (counter == n) {
      break;
    }
  }
  console.log(`Sum: ${sum}`);
}
sumOfOddNumbers(5);
sumOfOddNumbers(3);
