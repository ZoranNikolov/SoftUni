function vegetableMarket(input) {
  let pricePerKgVeg = Number(input[0]);
  let pricePerKgFruitt = Number(input[1]);
  let vegKg = Number(input[2]);
  let fruitKg = Number(input[3]);

  let totalSum = pricePerKgVeg * vegKg + pricePerKgFruitt * fruitKg;

  let lvToEuro = totalSum / 1.94;

  console.log(lvToEuro.toFixed(2));
}
vegetableMarket(["0.194", "19.4", "10", "10"]);
