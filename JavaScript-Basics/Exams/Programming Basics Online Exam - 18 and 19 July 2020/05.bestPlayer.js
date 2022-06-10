function bestPlayer(input) {
  let index = 0;
  let curName = "";
  let name = "";
  let curGoals = 0;
  let goals = 0;
  let command = input[index++];

  while (command !== "END") {
    curName = command;
    command = input[index++];
    curGoals = Number(command);
    if (curGoals > goals) {
      goals = curGoals;
      name = curName;
    }
    if (goals >= 10) {
      break;
    }
    command = input[index++];
  }
  console.log(`${name} is the best player!`);
  if (goals >= 3) {
    console.log(`He has scored ${goals} goals and made a hat-trick !!!`);
  } else {
    console.log(`He has scored ${goals} goals.`);
  }
}
bestPlayer(["Petrov", "2", "Drogba", "11"]);
