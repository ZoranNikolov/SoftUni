function careOfPuppy(input) {
  let index = 0;
  let foodKg = Number(input[index]);
  let foodGr = foodKg * 1000;
  index++;
  let foodEatenGr = 0;
  let command = input[index];
  index++;
  let isEnough = true;

  while (command !== "Adopted") {
    foodEatenGr = Number(command);
    foodGr -= foodEatenGr;
    command = input[index];
    index++;
  }
  if (foodGr >= 0) {
    console.log(`Food is enough! Leftovers: ${foodGr} grams.`);
  } else {
    console.log(`Food is not enough. You need ${Math.abs(foodGr)} grams more.`);
  }
}
careOfPuppy(["2", "999", "456", "999", "999", "123", "456", "Adopted"]);
