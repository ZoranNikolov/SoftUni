function worldSnookerChampionship(input) {
  let level = input[0];
  let type = input[1];
  let amount = Number(input[2]);
  let picture = input[3];
  let price = 0;

  switch (type) {
    case "Standard":
      switch (level) {
        case "Quarter final":
          price = 55.5;
          break;
        case "Semi final":
          price = 75.88;
          break;
        case "Final":
          price = 110.1;
          break;
      }
      break;
    case "Premium":
      switch (level) {
        case "Quarter final":
          price = 105.2;
          break;
        case "Semi final":
          price = 125.22;
          break;
        case "Final":
          price = 160.66;
          break;
      }
      break;
    case "VIP":
      switch (level) {
        case "Quarter final":
          price = 118.9;
          break;
        case "Semi final":
          price = 300.4;
          break;
        case "Final":
          price = 400;
          break;
      }
      break;
  }
  price *= amount;
  if (price > 4000) {
    price *= 0.75;
  } else if (price > 2500) {
    price = price * 0.9;
  }
  if (picture === "Y" && price <= 4000) {
    price += amount * 40;
  }
  console.log(`${price.toFixed(2)}`);
}
worldSnookerChampionship(["Quarter final", "Standard", "11", "N"]);
