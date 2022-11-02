function easterEggsBattle(input) {
  let index = 0;
  let countEggsFirst = Number(input[index++]);
  let countEggsSecond = Number(input[index++]);
  let command = input[index++];

  while (command !== "End") {
    switch (command) {
      case "one":
        countEggsSecond--;
        break;
      case "two":
        countEggsFirst--;
        break;
    }
    if (countEggsFirst === 0) {
      console.log(`Player one is out of eggs. Player two has ${countEggsSecond} eggs left.`);
      break;
    } else if (countEggsSecond === 0) {
      console.log(`Player two is out of eggs. Player one has ${countEggsFirst} eggs left.`);
      break;
    }
    command = input[index++];
  }
  if (command === "End") {
    console.log(`Player one has ${countEggsFirst} eggs left.`);
    console.log(`Player two has ${countEggsSecond} eggs left.`);
  }
}
easterEggsBattle(["2", "6", "one", "two", "two"]);