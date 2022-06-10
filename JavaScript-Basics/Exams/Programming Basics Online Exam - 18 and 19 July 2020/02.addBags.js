function addBags(input) {
  let pricePerBaggageOver20Kg = Number(input[0]);
  let baggageKg = Number(input[1]);
  let daysUntilTravel = Number(input[2]);
  let baggageCount = Number(input[3]);
  let price = 0;

  if (baggageKg < 10) {
    price = pricePerBaggageOver20Kg * 0.2;
  } else if (baggageKg <= 20) {
    price = pricePerBaggageOver20Kg * 0.5;
  } else {
    price = pricePerBaggageOver20Kg;
  }

  if (daysUntilTravel > 30) {
    price *= 1.1;
  } else if (daysUntilTravel <= 30 && daysUntilTravel >= 7) {
    price *= 1.15;
  } else {
    price *= 1.4;
  }
  price *= baggageCount;
  console.log(`The total price of bags is: ${price.toFixed(2)} lv.`);
}
addBags(["25.5", "5", "36", "6"]);
