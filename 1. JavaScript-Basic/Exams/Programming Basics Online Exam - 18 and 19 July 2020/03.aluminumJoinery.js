function aluminumJoinery(input) {
  let amount = Number(input[0]);
  let type = input[1];
  let delivery = input[2];
  let deliveryPrice = 60;
  let price = 0;

  switch (type) {
    case "90X130":
      price = 110;
      if (amount > 30 && amount <= 60) {
        price *= 0.95;
      } else if (amount > 60) {
        price *= 0.92;
      }
      break;
    case "100X150":
      price = 140;
      if (amount > 40 && amount <= 80) {
        price *= 0.94;
      } else if (amount > 80) {
        price *= 0.9;
      }
      break;
    case "130X180":
      price = 190;
      if (amount > 20 && amount <= 50) {
        price *= 0.93;
      } else if (amount > 50) {
        price *= 0.88;
      }
      break;
    case "200X300":
      price = 250;
      if (amount > 25 && amount <= 50) {
        price *= 0.91;
      } else if (amount > 50) {
        price *= 0.86;
      }
  }
  price *= amount;
  if (delivery === "With delivery") {
    price += deliveryPrice;
  }
  if (amount > 99) {
    price *= 0.96;
  }
  if (amount < 10) {
    console.log("Invalid order");
  } else {
    console.log(`${price.toFixed(2)} BGN`);
  }
}
aluminumJoinery(["2", "130X180", "With delivery"]);
