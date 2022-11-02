function bonusScore(input) {
  let startingPoints = Number(input[0]);
  let bonus = 0;

  if (startingPoints <= 100) {
    bonus += 5;
  } else if (startingPoints > 100) {
    bonus += startingPoints + (startingPoints * 20) / 100;
  } else if (startingPoints > 1000) {
    bonus += startingPoints + (startingPoints * 10) / 100;
  }

  if (startingPoints % 2 === 0) {
    bonus += 1;
  }
  if (startingPoints % 2 === 5) {
    bonus += 2;
  }

  let total = bonus + startingPoints;
  console.log(bonus);
  console.log(total);
}
bonusScore(["20"]);
