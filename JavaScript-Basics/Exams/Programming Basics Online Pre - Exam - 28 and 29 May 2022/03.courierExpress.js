function courierExpress(input) {
  let weight = Number(input[0]);
  let type = input[1];
  let distance = Number(input[2]);
  let price = 0;
  let pricePerKm = 0;
  let pricePerKg = 0;

  if (weight < 1) {
    pricePerKm = 0.03;
  } else if (weight >= 1 && weight < 10) {
    pricePerKm = 0.05;
  } else if (weight >= 10 && weight < 40) {
    pricePerKm = 0.1;
  } else if (weight >= 40 && weight < 90) {
    pricePerKm = 0.15;
  } else if (weight >= 90 && weight < 150) {
    pricePerKm = 0.2;
  }

  switch (type) {
    case "express":
      if (weight < 1) {
        pricePerKm = 0.03;
        pricePerKg = pricePerKm * 0.8;
      } else if (weight >= 1 && weight < 10) {
        pricePerKm = 0.05;
        pricePerKg = pricePerKm * 0.4;
      } else if (weight >= 10 && weight < 40) {
        pricePerKm = 0.1;
        pricePerKg = pricePerKm * 0.05;
      } else if (weight >= 40 && weight < 90) {
        pricePerKm = 0.15;
        pricePerKg = pricePerKm * 0.02;
      } else if (weight >= 90 && weight < 150) {
        pricePerKm = 0.2;
        pricePerKg = pricePerKm * 0.01;
      }
      break;
  }
  let additionForKm = pricePerKg * weight;
  price = distance * pricePerKm + additionForKm * distance;

  console.log(
    `The delivery of your shipment with weight of ${weight.toFixed(
      3
    )} kg. would cost ${price.toFixed(2)} lv.`
  );
}
courierExpress(["87", "express", "130"]);
