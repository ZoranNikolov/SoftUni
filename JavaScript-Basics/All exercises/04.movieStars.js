function movieStars(input) {
  let index = 0;
  let budget = Number(input[index++]);
  let command = input[index++];

  while (command !== "ACTION") {
    let name = String(command);
    let paying = 0;
    if (name.length > 15) {
      paying = budget * 0.2;
    } else {
      command = input[index++];
      paying = Number(command);
    }
    budget -= paying;
    if (budget < 0) {
      break;
    }
    command = input[index++];
  }
  if (budget >= 0) {
    console.log(`We are left with ${budget.toFixed(2)} leva.`);
  } else {
    budget = Math.abs(budget);
    console.log(`We need ${budget.toFixed(2)} leva for our actors.`);
  }
}
movieStars([
  "600000",
  "Michael Aniston",
  "400000",
  "Pamela Anderson",
  "200010",
  "ACTION",
]);
