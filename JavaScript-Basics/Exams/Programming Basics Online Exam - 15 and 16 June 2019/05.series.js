function series(input) {
  let index = 0;
  let budget = Number(input[index++]);
  let amount = Number(input[index++]);
  let price = 0;

  for (let i = 0; i < amount; i++) {
    let name = input[index++];
    let value = Number(input[index++]);
    switch (name) {
      case "Thrones":
        value *= 0.5;
        break;
      case "Lucifer":
        value *= 0.6;
        break;
      case "Protector":
        value *= 0.7;
        break;
      case "TotalDrama":
        value *= 0.8;
        break;
      case "Area":
        value *= 0.9;
        break;
    }
    price += value;
  }
  let diff = Math.abs(price - budget);
  if (budget >= price) {
    console.log(
      `You bought all the series and left with ${diff.toFixed(2)} lv.`
    );
  } else {
    console.log(`You need ${diff.toFixed(2)} lv. more to buy the series!`);
  }
}
series([
  "25",
  "6",
  "Teen Wolf",
  "8",
  "Protector",
  "5",
  "TotalDrama",
  "5",
  "Area",
  "4",
  "Thrones",
  "5",
  "Lucifer",
  "9",
]);
