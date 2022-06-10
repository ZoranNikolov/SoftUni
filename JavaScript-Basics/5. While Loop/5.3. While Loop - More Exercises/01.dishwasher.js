function dishwasher(input) {
  let index = 0;
  const detergentBottles = Number(input[index++]);
  let detergentMl = detergentBottles * 750;
  let command = input[index++];
  const dishConsumption = 5;
  let dishesToWash = 0;
  let dishCounter = 0;
  const stewPanConsumption = 15;
  let stewPansToWash = 0;
  let stewPanCounter = 0;
  let counter = 1;

  while (detergentMl >= 0) {
    if (command === "End") {
      console.log(`Detergent was enough!`);
      console.log(
        `${dishCounter} dishes and ${stewPanCounter} pots were washed.`
      );
      console.log(`Leftover detergent ${detergentMl} ml.`);
    }
    if (counter % 3 !== 0) {
      dishesToWash = Number(command);
      detergentMl -= dishesToWash * dishConsumption;
      dishCounter += dishesToWash;
    } else {
      stewPansToWash = Number(command);
      detergentMl -= stewPansToWash * stewPanConsumption;
      stewPanCounter += stewPansToWash;
    }
    command = input[index++];
    counter++;
  }
  if (detergentMl < 0) {
    console.log(
      `Not enough detergent, ${Math.abs(detergentMl)} ml. more necessary!`
    );
  }
}
dishwasher(["2", "53", "65", "55", "End"]);
dishwasher(["1", "10", "15", "10", "12", "13", "30"]);
