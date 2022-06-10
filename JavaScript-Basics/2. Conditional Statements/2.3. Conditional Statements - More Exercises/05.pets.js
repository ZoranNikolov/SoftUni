function pets(input) {
  let days = Number(input[0]);
  let foodLeftKg = Number(input[1]);
  let foodForDogKg = Number(input[2]);
  let foodForCatKg = Number(input[3]);
  let foodForTurtleGr = Number(input[4]);

  let totalFoodNeededKg =
    (foodForDogKg + foodForCatKg + foodForTurtleGr / 1000) * days;

  let diff = Math.abs(foodLeftKg - totalFoodNeededKg);

  if (foodLeftKg >= totalFoodNeededKg) {
    console.log(`${Math.floor(diff)} kilos of food left.`);
  } else {
    console.log(`${Math.ceil(diff)} more kilos of food are needed.`);
  }
}
pets(["5", "10", "2.1", "0.8", "321"]);
