function bills(input) {
  let index = 0;
  let months = Number(input[index++]);

  let electricity = 0;
  let water = 20;
  let net = 15;
  let others = 0;
  let sum = 0;

  for (i = 0; i < months; i++) {
    let electricityMonthly = Number(input[index++]);
    electricity += electricityMonthly;
    others +=
      water +
      net +
      electricityMonthly +
      ((water + net + electricityMonthly) * 20) / 100;
    sum += electricity + others;
  }
  let waterTotal = months * water;
  let netTotal = months * net;
  let avg = (electricity + waterTotal + netTotal + others) / months;

  console.log(`Electricity: ${electricity.toFixed(2)} lv\nWater: ${waterTotal.toFixed(2)} lv\nInternet: ${netTotal.toFixed(2)} lv\nOther: ${others.toFixed(2)} lv\nAverage: ${avg.toFixed(2)} lv`);
}
bills(["5", "68.63", "89.25", "132.53", "93.53", "63.22"]);
