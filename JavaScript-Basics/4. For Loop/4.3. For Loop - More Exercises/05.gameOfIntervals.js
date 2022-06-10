function gameOfIntervals(input) {
  let index = 0;

  let movesToPlay = Number(input[index++]);
  let number = Number(input[index++]);

  let counter0To9 = 0;
  let counter10To19 = 0;
  let counter20To29 = 0;
  let counter30To39 = 0;
  let counter40To50 = 0;
  let counterNegativeOrOver50 = 0;
  let result = 0;

  for (let i = 1; i <= movesToPlay; i++) {
    if (number >= 0 && number < 10) {
      counter0To9++;
      result += (number * 20) / 100;
    } else if (number >= 10 && number < 20) {
      counter10To19++;
      result += (number * 30) / 100;
    } else if (number >= 20 && number < 30) {
      counter20To29++;
      result += (number * 40) / 100;
    } else if (number >= 30 && number < 40) {
      counter30To39++;
      result += 50;
    } else if (number >= 40 && number <= 50) {
      counter40To50++;
      result += 100;
    } else {
      counterNegativeOrOver50++;
      result /= 2;
    }
    number = Number(input[index++]);
  }

  let to9 = (counter0To9 / movesToPlay) * 100;
  let to19 = (counter10To19 / movesToPlay) * 100;
  let to29 = (counter20To29 / movesToPlay) * 100;
  let to39 = (counter30To39 / movesToPlay) * 100;
  let to50 = (counter40To50 / movesToPlay) * 100;
  let negative = (counterNegativeOrOver50 / movesToPlay) * 100;

  console.log(`${result.toFixed(2)}`);
  console.log(`From 0 to 9: ${to9.toFixed(2)}%`);
  console.log(`From 10 to 19: ${to19.toFixed(2)}%`);
  console.log(`From 20 to 29: ${to29.toFixed(2)}%`);
  console.log(`From 30 to 39: ${to39.toFixed(2)}%`);
  console.log(`From 40 to 50: ${to50.toFixed(2)}%`);
  console.log(`Invalid numbers: ${negative.toFixed(2)}%`);
}
gameOfIntervals([
  "10",
  "43",
  "57",
  "-12",
  "23",
  "12",
  "0",
  "50",
  "40",
  "30",
  "20",
]);
