function easterEggs(input) {
  let index = 0;
  let amount = Number(input[index++]);
  let redCounter = 0;
  let orangeCounter = 0;
  let blueCounter = 0;
  let greenCounter = 0;
  let maxColor = "";
  let maxEggs = 0;

  for (let i = 0; i < amount; i++) {
    let command = input[index++];
    switch (command) {
      case "red":
        redCounter++;
        break;
      case "orange":
        orangeCounter++;
        break;
      case "blue":
        blueCounter++;
        break;
      case "green":
        greenCounter++;
        break;
    }
  }
  if (
    redCounter > orangeCounter &&
    redCounter > blueCounter &&
    redCounter > greenCounter
  ) {
    maxColor = "red";
    maxEggs = redCounter;
  } else if (
    orangeCounter > redCounter &&
    orangeCounter > blueCounter &&
    orangeCounter > greenCounter
  ) {
    maxColor = "orange";
    maxEggs = orangeCounter;
  } else if (
    blueCounter > redCounter &&
    blueCounter > orangeCounter &&
    blueCounter > greenCounter
  ) {
    maxColor = "blue";
    maxEggs = blueCounter;
  } else {
    maxColor = "green";
    maxEggs = greenCounter;
  }
  console.log(`Red eggs: ${redCounter}`);
  console.log(`Orange eggs: ${orangeCounter}`);
  console.log(`Blue eggs: ${blueCounter}`);
  console.log(`Green eggs: ${greenCounter}`);
  console.log(`Max eggs: ${maxEggs} -> ${maxColor}`);
}
easterEggs(["7", "orange", "blue", "green", "green", "blue", "red", "green"]);
