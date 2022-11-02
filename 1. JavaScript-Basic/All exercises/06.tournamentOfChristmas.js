function tournamentOfChristmas(input) {
  let index = 0;
  let days = Number(input[index]);
  index++;
  let finishCounter = 0;
  let moneyWonTotal = 0;
  let victoryCoutnerTotal = 0;
  let lossCounterTotal = 0;

  while (finishCounter !== days) {
    let command = input[index++];
    let victoryCounterDaily = 0;
    let lossCounterDaily = 0;
    let moneyWonDaily = 0;

    while (command !== "Finish") {
      command = input[index++];
      let sportResult = command;
      if (sportResult === "win") {
        moneyWonDaily += 20;
        victoryCounterDaily++;
      } else {
        lossCounterDaily++;
      }
      command = input[index++];
    }
    finishCounter++;
    if (victoryCounterDaily > lossCounterDaily) {
      moneyWonDaily *= 1.1;
    }
    victoryCoutnerTotal += victoryCounterDaily;
    lossCounterTotal += lossCounterDaily;
    moneyWonTotal += moneyWonDaily;
  }
  if (victoryCoutnerTotal > lossCounterTotal) {
    moneyWonTotal *= 1.2;
    console.log(
      `You won the tournament! Total raised money: ${moneyWonTotal.toFixed(2)}`
    );
  } else {
    console.log(
      `You lost the tournament! Total raised money: ${moneyWonTotal.toFixed(2)}`
    );
  }
}
tournamentOfChristmas([
  "3",
  "darts",
  "lose",
  "handball",
  "lose",
  "judo",
  "win",
  "Finish",
  "snooker",
  "lose",
  "swimming",
  "lose",
  "squash",
  "lose",
  "table tennis",
  "win",
  "Finish",
  "volleyball",
  "win",
  "basketball",
  "win",
  "Finish",
]);
