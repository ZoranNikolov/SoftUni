function perfectNumber(num) {
  let sum = 0;

  for (let divisor = 0; divisor < num; divisor++) {
    if (num % divisor === 0) {
      sum += divisor;
    }
  }

  let result =
    sum === num ? "We have a perfect number!" : "It's not so perfect.";
  console.log(result);
}
perfectNumber(6);
perfectNumber(28);
perfectNumber(1236498);
