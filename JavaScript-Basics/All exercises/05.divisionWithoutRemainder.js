function divisionWithoutRemainder(input) {
  let index = 0;
  let amount = Number(input[index++]);
  let counterBy2 = 0;
  let counterBy3 = 0;
  let counterBy4 = 0;

  for (let i = 0; i < amount; i++) {
    let currentNum = Number(input[index++]);
    if (currentNum % 4 == 0) {
      counterBy4++;
    }
    if (currentNum % 3 == 0) {
      counterBy3++;
    }
    if (currentNum % 2 == 0) {
      counterBy2++;
    }
  }
  console.log(`${((counterBy2 / amount) * 100).toFixed(2)}%`);
  console.log(`${((counterBy3 / amount) * 100).toFixed(2)}%`);
  console.log(`${((counterBy4 / amount) * 100).toFixed(2)}%`);
}
divisionWithoutRemainder([
  "10",
  "680",
  "2",
  "600",
  "200",
  "800",
  "799",
  "199",
  "46",
  "128",
  "65",
]);
