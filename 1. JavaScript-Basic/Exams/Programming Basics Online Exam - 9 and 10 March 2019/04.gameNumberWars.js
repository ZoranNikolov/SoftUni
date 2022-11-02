function gameNumberWars(input) {
  let index = 0;
  let player1 = input[index++];
  let player2 = input[index++];
  let command = input[index++];
  let counterP1 = 0;
  let counterP2 = 0;
  let isNumberWars = false;
  let winner = "";
  let winnerPoints = 0;

  while (command !== "End of game") {
    let card1 = Number(command);
    command = input[index++];
    let card2 = Number(command);
    command = input[index++];
    let diff = Math.abs(card1 - card2);
    if (card1 > card2) {
      counterP1 += diff;
    } else if (card1 < card2) {
      counterP2 += diff;
    } else {
      isNumberWars = true;
      card1 = Number(command);
      command = input[index++];
      card2 = Number(command);
      if (card1 > card2) {
        winner = player1;
        winnerPoints = counterP1;
      } else if (card1 < card2) {
        winner = player2;
        winnerPoints = counterP2;
      }
      break;
    }
  }
  if (isNumberWars) {
    console.log("Number wars!");
    console.log(`${winner} is winner with ${winnerPoints} points`);
  } else {
    console.log(`${player1} has ${counterP1} points`);
    console.log(`${player2} has ${counterP2} points`);
  }
}
gameNumberWars([
  "Aleks",
  "Georgi",
  "4",
  "5",
  "3",
  "2",
  "4",
  "3",
  "4",
  "4",
  "5",
  "2",
]);
