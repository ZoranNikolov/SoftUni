function heartDelivery(data) {
  let neighborhood = data.shift().split("@").map(Number);
  let index = 0;
  let command = data[index++];
  let currentPositionIndex = 0;

  while (command !== "Love!") {
    let distanceJump = Number(command.split(" ").pop());
    currentPositionIndex += distanceJump;

    if (currentPositionIndex >= neighborhood.length) {
      currentPositionIndex = 0;
    }

    let currentPositionValue = neighborhood[currentPositionIndex];

    if (currentPositionValue === 0) {
      console.log(`Place ${currentPositionIndex} already had Valentine's day.`);
      command = data[index++];
      continue;
    }

    currentPositionValue -= 2;

    neighborhood.splice(currentPositionIndex, 1, currentPositionValue);

    if (currentPositionValue === 0) {
      console.log(`Place ${currentPositionIndex} has Valentine's day.`);
    }

    command = data[index++];
  }

  console.log(`Cupid's last position was ${currentPositionIndex}.`);

  let result = neighborhood.reduce((a, b) => a + b, 0);

  if (result === 0) {
    console.log("Mission was successful.");
  } else {
    let counter = 0;
    for (let el of neighborhood) {
      if (el > 0) {
        counter++;
      }
    }
    console.log(`Cupid has failed ${counter} places.`);
  }
}

// heartDelivery(["10@10@10@2", "Jump 1", "Jump 2", "Love!"]);
heartDelivery([
  "2@4@2",
  "Jump 2",
  "Jump 2",
  "Jump 8",
  "Jump 3",
  "Jump 1",
  "Love!",
]);
