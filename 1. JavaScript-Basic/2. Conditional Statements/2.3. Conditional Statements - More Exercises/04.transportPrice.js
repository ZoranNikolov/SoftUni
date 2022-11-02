function transportPrice(input) {
  let km = Number(input[0]);
  let shift = input[1];

  let taxiStartingTax = 0.7;
  let taxiDayTariff = 0.79;
  let taxiNightTariff = 0.9;
  let busTariff = 0.09;
  let trainTariff = 0.06;
  let priceForTransport = 0;

  if (km >= 100) {
    priceForTransport = trainTariff * km;
  } else if (km >= 20) {
    priceForTransport = busTariff * km;
  } else {
    // if (shift === "day") {
    //   priceForTransport = taxiStartingTax + taxiDayTariff * km;
    // } else {
    //   priceForTransport = taxiStartingTax + taxiNightTariff * km;
    // }
    switch (shift) {
      case "day":
        priceForTransport = taxiStartingTax + taxiDayTariff * km;
        break;
      case "night":
        priceForTransport = taxiStartingTax + taxiNightTariff * km;
        break;
    }
  }
  console.log(priceForTransport.toFixed(2));
}
transportPrice(["7", "day"]);
