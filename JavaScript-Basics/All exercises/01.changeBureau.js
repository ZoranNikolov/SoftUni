function changeBureau(input) {
  let bitCoinAmount = Number(input[0]);
  let chineseYAmount = Number(input[1]);
  let commisionPercent = Number(input[2]);

  let bitcoinPrice = 1168;
  let chineseYPrice = 0.15;
  let dollarPrice = 1.76;
  let euroPrice = 1.95;

  let dollars = chineseYAmount * chineseYPrice;
  let leva = dollars * dollarPrice + bitCoinAmount * bitcoinPrice;
  let euro = (leva / euroPrice) - ((leva / euroPrice) * commisionPercent) / 100;

  console.log(euro.toFixed(2));
}
changeBureau(["1", "5", "5"]);
