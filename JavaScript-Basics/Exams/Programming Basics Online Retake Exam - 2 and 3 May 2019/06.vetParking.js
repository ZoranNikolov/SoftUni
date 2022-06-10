function vetParking(input) {
  let days = Number(input[0]);
  let hours = Number(input[1]);
  let priceTotal = 0;

  for (let currentDay = 1; currentDay <= days; currentDay++) {
    let price = 0;
    for (let currentHour = 1; currentHour <= hours; currentHour++) {
      if (currentDay % 2 === 0 && currentHour % 2 !== 0) {
        price += 2.5;
      } else if (currentDay % 2 !== 0 && currentHour % 2 === 0) {
        price += 1.25;
      } else {
        price += 1;
      }
    }
    console.log(`Day: ${currentDay} - ${price.toFixed(2)} leva`);
    priceTotal += price;
  }
  console.log(`Total: ${priceTotal.toFixed(2)} leva`);
}
vetParking(["2", "5"]);
