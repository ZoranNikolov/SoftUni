function footballResults(input) {
  let first = input[0];
  let second = input[1];
  let third = input[2];
  let wins = 0;
  let losses = 0;
  let draws = 0;

  let scoreFirstHome = Number(first.charAt(0));
  let scoreFirstAway = Number(first.charAt(2));

  if (scoreFirstHome > scoreFirstAway) {
    wins++;
  } else if (scoreFirstHome < scoreFirstAway) {
    losses++;
  } else {
    draws++;
  }

  let scoreSecondHome = Number(second.charAt(0));
  let scoreSecondAway = Number(second.charAt(2));

  if (scoreSecondHome > scoreSecondAway) {
    wins++;
  } else if (scoreSecondHome < scoreSecondAway) {
    losses++;
  } else {
    draws++;
  }

  let scoreThirdHome = Number(third.charAt(0));
  let scoreThirdAway = Number(third.charAt(2));

  if (scoreThirdHome > scoreThirdAway) {
    wins++;
  } else if (scoreThirdHome < scoreThirdAway) {
    losses++;
  } else {
    draws++;
  }

  console.log(`Team won ${wins} games.`);
  console.log(`Team lost ${losses} games.`);
  console.log(`Drawn games: ${draws}`);
}
footballResults(["4:2", "0:3", "1:0"]);
