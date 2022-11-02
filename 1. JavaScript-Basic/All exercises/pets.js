function pets(input) {
  const days = Number(input[0]);
  const foodLeftKg = Number(input[1]);
  const dogFoodNeededPerDayKg = Number(input[2]);
  const catFoodNeededPerDayKg = Number(input[3]);
  const tortoiseFoodNeededPerDayGrams = Number(input[4]);

  const totalFoodNeededKg =
    days * dogFoodNeededPerDayKg +
    days * catFoodNeededPerDayKg +
    (days * tortoiseFoodNeededPerDayGrams) / 1000;

  const differenceKg = Math.abs(totalFoodNeededKg - foodLeftKg);

  if (foodLeftKg >= totalFoodNeededKg) {
    console.log(`${Math.floor(differenceKg)} kilos of food left.`);
  } else {
    console.log(`${Math.ceil(differenceKg)} more kilos of food are needed.`);
  }
}
pets(["5", "10", "2.1", "0.8", "321"]);
