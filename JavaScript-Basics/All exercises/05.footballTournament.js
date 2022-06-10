function footBallTournament(input) {
  let index = 0;
  let team = input[index++];
  let matches = Number(input[index++]);
  let winCounter = 0;
  let drawCounter = 0;
  let lossCounter = 0;
  let points = 0;

  for (let i = 0; i < matches; i++) {
    let result = input[index++];
    switch (result) {
      case "W":
        winCounter++;
        points += 3;
        break;
      case "D":
        drawCounter++;
        points += 1;
        break;
      case "L":
        lossCounter++;
        break;
    }
  }
  let winRate = (winCounter / matches) * 100;
  if (matches === 0) {
    console.log(`${team} hasn't played any games during this season.`);
  } else {
    console.log(`${team} has won ${points} points during this season.`);
    console.log("Total stats:");
    console.log(`## W: ${winCounter}`);
    console.log(`## D: ${drawCounter}`);
    console.log(`## L: ${lossCounter}`);
    console.log(`Win rate: ${winRate.toFixed(2)}%`);
  }
}
footBallTournament([
  "Liverpool",
  "10",
  "W",
  "D",
  "D",
  "W",
  "L",
  "W",
  "D",
  "D",
  "W",
  "W",
]);
