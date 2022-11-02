function energyBooster(input) {
  let fruit = input[0];
  let sizeSet = input[1];
  let countSet = Number(input[2]);
  let price = 0;

  let priceWatermelonSizeSmall = 2 * 56;
  let priceWatermelonSizeBig = 5 * 28.7;
  let priceMangoSizeSmall = 2 * 36.66;
  let priceMangoSizeBig = 5 * 19.6;
  let pricePineappleSmall = 2 * 42.1;
  let pricePineappleBig = 5 * 24.8;
  let priceRaspberrySmall = 2 * 20;
  let priceRaspberryBig = 2 * 15.2;

  switch (fruit) {
    case "Watermelon":
      switch (sizeSet) {
        case "small":
          price = priceWatermelonSizeSmall;
          break;
        case "big":
          price = priceWatermelonSizeBig;
          break;
      }
      break;
    case "Mango":
      switch (sizeSet) {
        case "small":
          price = priceMangoSizeSmall;
          break;
        case "big":
          price = priceMangoSizeBig;
          break;
      }
      break;
    case "Pineapple":
      switch (sizeSet) {
        case "small":
          price = pricePineappleSmall;
          break;
        case "big":
          price = pricePineappleBig;
          break;
      }
      break;
    case "Raspberry":
      switch (sizeSet) {
        case "small":
          price = priceRaspberrySmall;
          break;
        case "big":
          price = priceRaspberryBig;
          break;
      }
      break;
  }
  price *= countSet;
  if (price >= 400 && price <= 1000) {
    price *= 0.85;
  } else if (price > 1000) {
    price *= 0.5;
  }
  console.log(`${price.toFixed(2)} lv.`);
}
energyBooster(["Pineapple", "small", "1"]);