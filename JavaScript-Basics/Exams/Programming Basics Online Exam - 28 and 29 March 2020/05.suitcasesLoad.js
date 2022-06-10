function suitcasesLoad(input) {
  let index = 0;
  let capacity = Number(input[index]);
  index++;
  let command = input[index];
  index++;
  let counter = 0;

  while (command !== "End") {
    let baggage = Number(command);
    counter++;
    if (counter % 3 === 0) {
      baggage *= 1.1;
    }
    if (capacity < baggage) {
      counter--;
      break;
    }
    capacity -= baggage;
    command = input[index];
    index++;
  }
  if (command === "End") {
    console.log("Congratulations! All suitcases are loaded!");
  } else {
    console.log("No more space!");
  }
  console.log(`Statistic: ${counter} suitcases loaded.`);
}
suitcasesLoad(["700.5", "180", "340.6", "126", "220"]);
