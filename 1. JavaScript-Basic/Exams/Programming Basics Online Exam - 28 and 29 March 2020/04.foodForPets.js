function foodForPets(input) {
  let index = 0;
  let days = Number(input[index++]);
  let foodAmount = Number(input[index++]);
  let foodEatenByDogCounter = 0;
  let foodEatenByCatCounter = 0;
  let bisquitsCounter = 0;

  for (let i = 1; i <= days; i++) {
    let foodEatenByDog = Number(input[index++]);
    foodEatenByDogCounter += foodEatenByDog;
    if (i % 3 === 0) {
      bisquitsCounter += foodEatenByDog * 0.1;
    }

    let foodEatenByCat = Number(input[index++]);
    foodEatenByCatCounter += foodEatenByCat;
    if (i % 3 === 0) {
      bisquitsCounter += foodEatenByCat * 0.1;
    }
  }
  let totalFoodEaten = foodEatenByDogCounter + foodEatenByCatCounter;
  let percentEatenFood = (totalFoodEaten / foodAmount) * 100;
  let percentFoodEatenByDog = (foodEatenByDogCounter / totalFoodEaten) * 100;
  let percentFoodEatenByCat = (foodEatenByCatCounter / totalFoodEaten) * 100;

  console.log(`Total eaten biscuits: ${bisquitsCounter.toFixed()}gr.`);
  console.log(`${percentEatenFood.toFixed(2)}% of the food has been eaten.`);
  console.log(`${percentFoodEatenByDog.toFixed(2)}% eaten from the dog.`);
  console.log(`${percentFoodEatenByCat.toFixed(2)}% eaten from the cat.`);
}
foodForPets(["3", "500", "100", "30", "110", "25", "120", "35"]);
