function flowerShop(input) {
  let magnolias = Number(input[0]);
  let zumb = Number(input[1]);
  let roses = Number(input[2]);
  let cactus = Number(input[3]);
  let giftPrice = Number(input[4]);

  let magnoliaPrice = 3.25;
  let zumbPrice = 4;
  let rosePrice = 3.5;
  let cactusPrice = 8;

  let totalSumAfterTax =
    (magnoliaPrice * magnolias +
      zumbPrice * zumb +
      rosePrice * roses +
      cactusPrice * cactus) *
    0.95;
  let diff = Math.abs(totalSumAfterTax - giftPrice);
  if (totalSumAfterTax >= giftPrice) {
    console.log(`She is left with ${Math.floor(diff)} leva.`);
  } else {
    console.log(`She will have to borrow ${Math.ceil(diff)} leva.`);
  }
}
flowerShop(["15", "7", "5", "10", "100"]);
