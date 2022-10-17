function treasureHunt(data) {
  let state = data.shift().split("|");
  let index = 0;
  let command = data[index++];

  while (command !== "Yohoho!") {
    let tokens = command.split(" ");
    let action = tokens.shift();

    switch (action) {
      case "Loot":
        for (let token of tokens) {
          if (!state.includes(token)) {
            state.unshift(token);
          }
        }
        break;
      case "Drop":
        let droppedItemIndex = Number(tokens[0]);
        if (droppedItemIndex > 0 && droppedItemIndex <= state.length - 1) {
          let droppedItem = state[droppedItemIndex];
          state.splice(droppedItemIndex, 1);
          state.push(droppedItem);
        }
        break;
      case "Steal":
        let stolenCount = Number(tokens[0]);
        let stolenItems = state.splice(-stolenCount);
        console.log(stolenItems.join(", "));
        break;
    }
    command = data[index++];
  }

  let sum = 0;

  for (let el of state) {
    sum += el.length;
  }

  let avg = sum / state.length;

  return state.length > 0
    ? `Average treasure gain: ${avg.toFixed(2)} pirate credits.`
    : "Failed treasure hunt.";
}
console.log(
  treasureHunt([
    "Gold|Silver|Bronze|Medallion|Cup",
    "Loot Wood Gold Coins",
    "Loot Silver Pistol",
    "Drop 3",
    "Steal 3",
    "Yohoho!",
  ])
);
console.log(
  treasureHunt([
    "Diamonds|Silver|Shotgun|Gold",
    "Loot Silver Medals Coal",
    "Drop -1",
    "Drop 1",
    "Steal 6",
    "Yohoho!",
  ])
);
