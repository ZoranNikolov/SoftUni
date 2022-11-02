function godzillaVsKong(input) {
  const budget = Number(input[0]);
  const stuntment = Number(input[1]);
  const priceForClothesPerPerson = Number(input[2]);
  const decorPrice = budget * 0.1;
  let totalPriceForClothesPerPerson = stuntment * priceForClothesPerPerson;

  if (stuntment > 150) {
    totalPriceForClothesPerPerson *= 0.9;
  }

  const totalMoney = totalPriceForClothesPerPerson + decorPrice;

  if (totalMoney > budget) {
    const moneyNeeded = totalMoney - budget;
    console.log("Not enough money!");
    console.log(`Wingard needs ${moneyNeeded.toFixed(2)} leva more.`);
  } else {
    const moneyLeft = budget - totalMoney;
    console.log("Action!");
    console.log(
      `Wingard starts filming with ${moneyLeft.toFixed(2)} leva left.`
    );
  }
}
godzillaVsKong(["9587.88", "222", "55.68"]);