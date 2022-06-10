function weatherForecast(input) {
  let weather = input[0];

  switch (weather) {
    case "sunny":
      console.log("It's warm outside!");
      break;

    default:
      console.log("It's cold outside!");
      break;
  }
}
weatherForecast(["snowy"]);
