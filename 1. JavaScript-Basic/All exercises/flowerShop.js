function flowerShop(input) {
  const magnoliaCount = Number(input[0]);
  const ziumbiulCount = Number(input[1]);
  const roseCount = Number(input[2]);
  const cactusCount = Number(input[3]);
  const giftPrice = Number(input[4]);

  const magnoliaPrice = 3.25;
  const ziumbiulPrice = 4.0;
  const rosePrice = 3.5;
  const cactusPrice = 8.0;

  const totalSum =
    (magnoliaCount * magnoliaPrice +
      ziumbiulCount * ziumbiulPrice +
      roseCount * rosePrice +
      cactusCount * cactusPrice) *
    0.95;
  const difference = Math.abs(totalSum - giftPrice);

  if (totalSum >= giftPrice) {
    console.log(`She is left with ${Math.floor(difference)} leva.`);
  } else {
    console.log(`She will have to borrow ${Math.ceil(difference)} leva.`);
  }
}
flowerShop(["15", "7", "5", "10", "100"]);
