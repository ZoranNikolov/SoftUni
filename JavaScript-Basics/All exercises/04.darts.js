function darts(input) {
  let index = 0;
  let name = input[index++];
  let command = input[index++];
  let points = 301;
  let counterSuccess = 0;
  let counterFailure = 0;

  while (command !== "Retire") {
    let type = command;
    command = input[index++];
    let currentPoints = Number(command);
    command = input[index++];
    switch (type) {
      case "Single":
        currentPoints *= 1;
        break;
      case "Double":
        currentPoints *= 2;
        break;
      case "Triple":
        currentPoints *= 3;
        break;
    }
    if (currentPoints <= points) {
      points -= currentPoints;
      counterSuccess++;
      if (points === 0) {
        break;
      }
    } else {
      counterFailure++;
    }
  }
  if (command !== "Retire") {
    console.log(`${name} won the leg with ${counterSuccess} shots.`);
  } else {
    console.log(`${name} retired after ${counterFailure} unsuccessful shots.`);
  }
}
darts([
  "Rob Cross",
  "Triple",
  "20",
  "Triple",
  "20",
  "Triple",
  "20",
  "Triple",
  "20",
  "Double",
  "20",
  "Triple",
  "20",
  "Double",
  "5",
  "Triple",
  "10",
  "Double",
  "6",
  "Retire",
]);
