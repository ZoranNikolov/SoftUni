function deerOfSanta(input) {
  let days = Number(input[0]);
  let foodLeftKg = Number(input[1]);
  let foodPerDay1StDeer = Number(input[2]);
  let foodPerDay2NdDeer = Number(input[3]);
  let foodPerDay3RdDeer = Number(input[4]);

  let totalFoodNeeded =
    foodPerDay1StDeer * days +
    foodPerDay2NdDeer * days +
    foodPerDay3RdDeer * days;

  let diff = Math.abs(totalFoodNeeded - foodLeftKg);

  if (totalFoodNeeded <= foodLeftKg) {
    console.log(`${Math.floor(diff)} kilos of food left.`);
  } else {
    console.log(`${Math.ceil(diff)} more kilos of food are needed.`);
  }
}
deerOfSanta(["2", "10", "1", "1", "2"]);
