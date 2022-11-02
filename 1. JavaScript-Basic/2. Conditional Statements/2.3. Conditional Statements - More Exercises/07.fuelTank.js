function fuelTank(input) {
  let fuelType = input[0];
  let fuelLeft = Number(input[1]);

  if (fuelType == "Diesel" || fuelType == "Gasoline" || fuelType == "Gas") {
    if (fuelLeft >= 25) {
      console.log(`You have enough ${fuelType.toLowerCase()}.`);
    } else {
      console.log(`Fill your tank with ${fuelType.toLowerCase()}!`);
    }
  } else {
    console.log("Invalid fuel!");
  }
}
fuelTank(["Kerosene", "40"]);