function nameGame(input) {
  let index = 0;
  let command = input[index++];
  let winner = "";
  let bestResult = 0;

  while (command !== "Stop") {
    let name = command;
    let points = 0;
    for (let i = 0; i < name.length; i++) {
      let symbol = name.charCodeAt(i);
      command = Number(input[index++]);
      if (symbol === command) {
        points += 10;
      } else {
        points += 2;
      }
    }
    if (points >= bestResult) {
      bestResult = points;
      winner = name;
    }
    command = input[index++];
  }
  console.log(`The winner is ${winner} with ${bestResult} points!`);
}
nameGame(["Ivan", "73", "20", "98", "110", "Ivo", "80", "65", "87", "Stop"]);