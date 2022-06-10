function oscars(input) {
  let index = 0;
  let actor = input[index++];
  let startingPoints = Number(input[index++]);
  let amount = Number(input[index++]);

  for (let i = 0; i < amount; i++) {
    let name = String(input[index++]);
    let currentPoints = (Number(input[index++]) * Number(name.length)) / 2;
    startingPoints += currentPoints;
    if (startingPoints > 1250.5) {
      break;
    }
  }
  if (startingPoints > 1250.5) {
    console.log(
      `Congratulations, ${actor} got a nominee for leading role with ${startingPoints.toFixed(
        1
      )}!`
    );
  } else {
    console.log(
      `Sorry, ${actor} you need ${(1250.5 - startingPoints).toFixed(1)} more!`
    );
  }
}
oscars([
  "Zahari Baharov",
  "205",
  "4",
  "Johnny Depp",
  "45",
  "Will Smith",
  "29",
  "Jet Lee",
  "10",
  "Matthew Mcconaughey",
  "39",
]);
