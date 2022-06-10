function tennisRanklist(input) {
  let index = 0;
  let countOfTournaments = Number(input[index++]);
  let initialPoints = Number(input[index++]);
  let points = 0;
  let counterW = 0;

  for (let i = 0; i < countOfTournaments; i++) {
    let stage = input[index++];
    switch (stage) {
      case "W":
        points += 2000;
        counterW++;
        break;
      case "F":
        points += 1200;
        break;
      case "SF":
        points += 720;
        break;
    }
  }
  let avgP = Math.floor(points / countOfTournaments);
  let percent = (counterW / countOfTournaments) * 100;
  console.log(`Final points: ${points + initialPoints}`);
  console.log(`Average points: ${avgP}`);
  console.log(`${percent.toFixed(2)}%`);
}
tennisRanklist(["5", "1400", "F", "SF", "W", "W", "SF"]);
