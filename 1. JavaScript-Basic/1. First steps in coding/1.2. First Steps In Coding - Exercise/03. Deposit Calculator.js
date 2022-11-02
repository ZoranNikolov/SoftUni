function depositCalculator(input) {
  let depositSum = Number(input[0]);
  let depositTerm = Number(input[1]);
  let interestYearly = Number(input[2]) / 100;

  let sum = depositSum + depositTerm * ((depositSum * interestYearly) / 12);

  console.log(sum);
}
depositCalculator(["2350", "6 ", "7 "]);
