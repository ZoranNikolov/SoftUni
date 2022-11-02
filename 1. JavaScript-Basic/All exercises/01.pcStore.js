function pcStore(input) {
  let processorPriceD = Number(input[0]);
  let priceVideoD = Number(input[1]);
  let priceRamD = Number(input[2]);
  let amountRam = Number(input[3]);
  let discountPercent = Number(input[4]);

  processorPriceD -= processorPriceD * discountPercent;
  priceVideoD -= priceVideoD * discountPercent;
  priceRamD *= amountRam;
  let sum = processorPriceD + priceVideoD + priceRamD;
  sum *= 1.57;
  
  console.log(`Money needed - ${sum.toFixed(2)} leva.`);
}
pcStore(["500", "200", "80", "2", "0.05"]);
