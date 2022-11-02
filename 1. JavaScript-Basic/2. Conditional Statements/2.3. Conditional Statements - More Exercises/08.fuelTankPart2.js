function fuelTankPart2(input) {
  let fuel = input[0];
  let amount = Number(input[1]);
  let clubCard = input[2];

  let gasolinePrice = 2.22;
  let dieselPrice = 2.33;
  let gasPrice = 0.93;

  let totalCost = 0;

  switch (clubCard) {
    case "Yes":
      gasolinePrice -= 0.18;
      dieselPrice -= 0.12;
      gasPrice -= 0.08;
      break;
  }

  switch (fuel) {
    case "Gasoline":
      totalCost = gasolinePrice * amount;
      break;
    case "Diesel":
      totalCost = dieselPrice * amount;
      break;
    case "Gas":
      totalCost = gasPrice * amount;
      break;
  }

  if (amount >= 20 && amount <= 25) {
    totalCost -= (totalCost * 8) / 100;
  } else if (amount > 25) {
    totalCost -= (totalCost * 10) / 100;
  }
  console.log(`${totalCost.toFixed(2)} lv.`);
}
fuelTankPart2(["Diesel", "19", "No"]);
