function catWalking(input) {
  let minutesPerWalking = Number(input[0]);
  let countOfWalkings = Number(input[1]);
  let calories = Number(input[2]);

  let caloriesBurned = minutesPerWalking * countOfWalkings * 5;

  if (caloriesBurned >= calories / 2) {
    console.log(
      `Yes, the walk for your cat is enough. Burned calories per day: ${caloriesBurned}.`
    );
  } else {
    console.log(
      `No, the walk for your cat is not enough. Burned calories per day: ${caloriesBurned}.`
    );
  }
}
catWalking(["30", "3", "600"]);
