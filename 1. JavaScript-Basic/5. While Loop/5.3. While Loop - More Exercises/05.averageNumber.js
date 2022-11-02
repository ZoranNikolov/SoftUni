function averageNumber(input) {
  let index = 0;
  const num = Number(input[index++]);
  let currentNumber = Number(input[index++]);
  let sum = 0;
  let result = 0;
  for (let i = 0; i < num; i++) {
    sum += currentNumber;
    currentNumber = Number(input[index++]);
  }
  result = sum / num;
  console.log(result.toFixed(2));
}
averageNumber(["4", "3", "2", "4", "2"]);
averageNumber(["2", "6", "4"]);
averageNumber(["3", "82", "43", "22"]);
averageNumber(["4", "95", "23", "76", "23"]);