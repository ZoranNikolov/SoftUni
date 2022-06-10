function truckDriver(input) {
  const season = input[0]; // "Spring", "Summer", "Autumn" или "Winter"
  const kmPerMonth = Number(input[1]);

  let profit = 0;

  if (kmPerMonth <= 5000) {
    switch (season) {
      case "Spring":
      case "Autumn":
        profit = kmPerMonth * 0.75;
        break;
      case "Summer":
        profit = kmPerMonth * 0.9;
        break;
      case "Winter":
        profit = kmPerMonth * 1.05;
        break;
    }
  } else if (5000 < kmPerMonth && kmPerMonth <= 10000) {
    switch (season) {
      case "Spring":
      case "Autumn":
        profit = kmPerMonth * 0.95;
        break;
      case "Summer":
        profit = kmPerMonth * 1.1;
        break;
      case "Winter":
        profit = kmPerMonth * 1.25;
        break;
    }
  } else if (10000 < kmPerMonth && kmPerMonth <= 20000) {
    profit = kmPerMonth * 1.45;
  }
  profit = profit * 4 * 0.9;

  console.log(profit.toFixed(2));
}
truckDriver(["Summer", "3455"]);
truckDriver(["Winter", "4350"]);
truckDriver(["Spring", "1600"]);
truckDriver(["Winter", "5678"]);
truckDriver(["Autumn", "8600"]);
truckDriver(["Winter", "16042"]);
truckDriver(["Spring", "16942"]);
