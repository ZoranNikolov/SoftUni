function easterCompetition(input) {
  let index = 0;
  let countBakes = Number(input[index++]);
  let name = "";
  let currentLeader = "";
  let bestResult = 0;
  let command = input[index++];

  for (let i = 0; i < countBakes; i++) {
    name = command;
    command = input[index++];
    let currentPoints = 0;
    while (command !== "Stop") {
      currentPoints += Number(command);
      command = input[index++];
    }
    console.log(`${name} has ${currentPoints} points.`);
    if (currentPoints > bestResult) {
      bestResult = currentPoints;
      currentLeader = name;
      console.log(`${currentLeader} is the new number 1!`);
    }
    command = input[index++];
  }
  console.log(`${currentLeader} won competition with ${bestResult} points!`);
}
easterCompetition([
  "2",
  "Chef Angelov",
  "9",
  "9",
  "9",
  "Stop",
  "Chef Rowe",
  "10",
  "10",
  "10",
  "10",
  "Stop",
]);
