function toyShop(input) {
  let tripPrice = Number(input[0]);
  let puzzlesCount = Number(input[1]);
  let dollsCount = Number(input[2]);
  let teddyBearsCount = Number(input[3]);
  let minionsCount = Number(input[4]);
  let trucksCount = Number(input[5]);

  let puzzlesPrice = 2.6;
  let dollPrice = 3;
  let teddyBearsPrice = 4.1;
  let minionPrice = 8.2;
  let truckPrice = 2;

  let totalCount =
    puzzlesCount + dollsCount + teddyBearsCount + minionsCount + trucksCount;
  let totalPrice =
    puzzlesCount * puzzlesPrice +
    dollsCount * dollPrice +
    teddyBearsPrice * teddyBearsCount +
    minionPrice * minionsCount +
    truckPrice * trucksCount;

  if (totalCount >= 50) {
    totalPrice = totalPrice - (totalPrice * 25) / 100;
  }

  let loanTax = 0.1 * totalPrice;

  totalPrice -= loanTax;
  let diff = Math.abs(totalPrice - tripPrice);
  if (totalPrice >= tripPrice) {
    console.log(`Yes! ${diff.toFixed(2)} lv left.`);
  } else {
    console.log(`Not enough money! ${diff.toFixed(2)} lv needed.`);
  }
}
toyShop(["320", "8", "2", "5", "5", "1"]);
