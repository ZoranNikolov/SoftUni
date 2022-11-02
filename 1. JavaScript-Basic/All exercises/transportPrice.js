function transportPrice(input) {
  const distanceKm = Number(input[0]);
  const dayNight = input[1];

  const taxiStartingPrice = 0.70;
  const taxiDayPricePerKm = 0.79;
  const taxiNightPricePerKm = 0.90;

  const taxiDayPrice = taxiStartingPrice + taxiDayPricePerKm * distanceKm;
  const taxiNightPrice = taxiStartingPrice + taxiNightPricePerKm * distanceKm;

  const busDayNightPricePerKm = 0.09;
  const busDayNightPrice = busDayNightPricePerKm * distanceKm;

  const trainDayNightPricePerKm = 0.06;
  const trainDayNightPrice = trainDayNightPricePerKm * distanceKm;

if (distanceKm >= 100 && dayNight == "day") {
    console.log(Math.min(taxiDayPrice, busDayNightPrice, trainDayNightPrice).toFixed(2));
  } else if (distanceKm >= 20 && dayNight == "day") {
    console.log(Math.min(taxiDayPrice, busDayNightPrice).toFixed(2));
  } else if (dayNight == "day") {
    console.log(taxiDayPrice.toFixed(2));
  } else if (distanceKm >= 100 && dayNight == "night") {
    console.log(Math.min(taxiNightPrice, busDayNightPrice, trainDayNightPrice).toFixed(2));
  } else if (distanceKm >= 20 && dayNight == "night") {
    console.log(Math.min(taxiNightPrice, busDayNightPrice).toFixed(2));
  } else if (distanceKm < 20 && dayNight == "night") {
    console.log(taxiNightPrice.toFixed(2));
  }
}
transportPrice(["5", "day"]);