function easterShop(input) {
  let index = 0;
  let initialAmount = Number(input[index++]);
  let command = "";
  let soldEggs = 0;
  let isFinished = false;

  while (command !== "Close") {
    command = input[index++];
    switch (command) {
      case "Buy":
        command = Number(input[index++]);
        if (command > initialAmount) {
          isFinished = true;
          break;
        }
        initialAmount -= command;
        soldEggs += command;
        break;
      case "Fill":
        command = Number(input[index++]);
        initialAmount += command;
        break;
    }
    if (isFinished) {
      break;
    }
  }
  if (command === "Close") {
    console.log("Store is closed!");
    console.log(`${soldEggs} eggs sold.`);
  } else {
    console.log("Not enough eggs in store!");
    console.log(`You can buy only ${initialAmount}.`);
  }
}
easterShop(["13", "Buy", "8", "Fill", "3", "Buy", "10"]);
