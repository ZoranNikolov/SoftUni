function guineaPig(input) {
  let foodKg = Number(input.shift());
  let hayKg = Number(input.shift());
  let coverKg = Number(input.shift());
  let weightKg = Number(input.shift());

  let eatingAmountKg = 0.3;
  let isRunOutOfFood = false;
  let month = 30;

  for (let day = 1; day <= month; day++) {
    foodKg -= eatingAmountKg;

    if (foodKg <= 0) {
      foodKg = 0;
      isRunOutOfFood = true;
      break;
    }

    if (day % 2 === 0) {
      let hayToGive = foodKg * 0.05;
      hayKg -= hayToGive;
      if (hayKg <= 0) {
        hayKg = 0;
        isRunOutOfFood = true;
        break;
      }
    }

    if (day % 3 === 0) {
      let coverToGive = weightKg / 3;
      coverKg -= coverToGive;
      if (coverKg <= 0) {
        coverKg = 0;
        isRunOutOfFood = true;
        break;
      }
    }
  }

  return !isRunOutOfFood
    ? `Everything is fine! Puppy is happy! Food: ${foodKg.toFixed(
        2
      )}, Hay: ${hayKg.toFixed(2)}, Cover: ${coverKg.toFixed(2)}.`
    : "Merry must go to the pet store!";
}
console.log(guineaPig(["10", "5", "5.2", "1"]));
console.log(guineaPig(["1", "1.5", "3", "1.5"]));
