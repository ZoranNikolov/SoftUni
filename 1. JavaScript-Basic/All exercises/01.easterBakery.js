function easterBakery(input) {
  let priceWheatPerKg = Number(input[0]);
  let kgWheat = Number(input[1]);
  let kgSugar = Number(input[2]);
  let eggPacks = Number(input[3]);
  let yeastPacks = Number(input[4]);

  let price =
    priceWheatPerKg * kgWheat +
    kgSugar * (priceWheatPerKg * 0.75) +
    eggPacks * (priceWheatPerKg * 1.1) +
    yeastPacks * (priceWheatPerKg * 0.75 * 0.2);
  console.log(price.toFixed(2));
}
easterBakery(["50", "10", "3.5", "6", "1"]);
