function fitnessCenter(input) {
  let index = 0;
  let visitors = Number(input[index++]);
  let backCounter = 0;
  let chestCounter = 0;
  let legsCounter = 0;
  let absCounter = 0;
  let proteinShakeCounter = 0;
  let proteinBarCounter = 0;
  let trainingCounter = 0;
  let buyingCounter = 0;

  for (let i = 0; i < visitors; i++) {
    let activity = input[index++];
    switch (activity) {
      case "Back":
        backCounter++;
        break;
      case "Chest":
        chestCounter++;
        break;
      case "Legs":
        legsCounter++;
        break;
      case "Abs":
        absCounter++;
        break;
      case "Protein shake":
        proteinShakeCounter++;
        break;
      case "Protein bar":
        proteinBarCounter++;
        break;
    }
    if (activity === "Protein shake" || activity === "Protein bar") {
      buyingCounter++;
    } else {
      trainingCounter++;
    }
  }
  let workingPercent = (trainingCounter / visitors) * 100;
  let buyingPercent = (buyingCounter / visitors) * 100;

  console.log(`${backCounter} - back`);
  console.log(`${chestCounter} - chest`);
  console.log(`${legsCounter} - legs`);
  console.log(`${absCounter} - abs`);
  console.log(`${proteinShakeCounter} - protein shake`);
  console.log(`${proteinBarCounter} - protein bar`);
  console.log(`${workingPercent.toFixed(2)}% - work out`);
  console.log(`${buyingPercent.toFixed(2)}% - protein`);
}
fitnessCenter([
  "10",
  "Back",
  "Chest",
  "Legs",
  "Abs",
  "Protein shake",
  "Protein bar",
  "Protein shake",
  "Protein bar",
  "Legs",
  "Abs",
]);
