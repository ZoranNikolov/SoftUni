function bestPlayer(input) {
  let index = 0;
  let currName = "";
  let bestPlayer = "";
  let score = 0;
  let bestPlayerScore = 0;
  let command = input[index++];

  while (command !== "END") {
    currName = command;
    command = input[index++];
    score = Number(command);
    if (score > bestPlayerScore) {
      bestPlayer = currName;
      bestPlayerScore = score;
    }
    if (bestPlayerScore >= 10) {
      break;
    }
  }
  console.log(`${bestPlayer} is the best player!`);
  if (bestPlayerScore >= 3) {
    console.log(
      `He has scored ${bestPlayerScore} goals and made a hat-trick !!!`
    );
  } else {
    console.log(`He has scored ${bestPlayerScore} goals.`);
  }
}
bestPlayer(["Rooney", "1", "Junior", "2", "Paolinio", "2", "END"]);
