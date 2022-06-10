function celsiusToFahrenheit(input) {
  let degrees = Number(input[0]);

  let fah = (degrees * 9) / 5 + 32;

  console.log(fah.toFixed(2));
}
celsiusToFahrenheit(["25"]);
