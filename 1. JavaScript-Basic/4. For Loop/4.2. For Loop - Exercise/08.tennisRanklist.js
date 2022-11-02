function tennisRanklist(input) {
  let index = 0;

  let tournamentsCount = Number(input[index++]);
  let startPoints = Number(input[index++]);
  let tempPoints = 0;
  let tournamentsWon = 0;

  for (let i = 0; i < tournamentsCount; i++) {
    let score = input[index++];
    switch (score) {
      case "W":
        tempPoints += 2000;
        tournamentsWon++;
        break;
      case "F":
        tempPoints += 1200;
        break;
      case "SF":
        tempPoints += 720;
        break;
    }
  }
  console.log(`Final points: ${tempPoints + startPoints}`);
  console.log(`Average points: ${Math.floor(tempPoints / tournamentsCount)}`);
  console.log(`${((tournamentsWon / tournamentsCount) * 100).toFixed(2)}%`);
}
tennisRanklist(["4", "750", "SF", "W", "SF", "W"]);