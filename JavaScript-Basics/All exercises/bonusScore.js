function bonusScore(input) {
  const number = Number(input[0]); // '20' => 20 number
  let bonus = 0; // 0
  if (number <= 100) {
    bonus = 5; // 5 bonus
  } else if (number > 1000) {
    bonus = number * 0.1;
  } else {
    bonus = number * 0.2;
  }

  if (number % 2 === 0) {
    bonus += 1; // bonus 6
  } else if (number % 10 === 5) {
    bonus += 2;
  }
  console.log(bonus); // 6
  console.log(bonus + number); // 26
}
bonusScore(["20"]);
