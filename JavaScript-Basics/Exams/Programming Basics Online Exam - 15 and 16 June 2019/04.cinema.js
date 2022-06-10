function cinema(input) {
  let index = 0;
  let capacity = Number(input[index++]);
  let command = input[index++];
  let counter = 0;
  let ticketPrice = 5;
  let income = 0;

  while (command !== "Movie time!") {
    let visitors = Number(command);
    if (visitors > capacity) {
      break;
    }
    let currentPrice = visitors * ticketPrice;
    if (visitors % 3 === 0) {
      currentPrice -= 5;
    }
    income += currentPrice;
    capacity -= visitors;
    counter += visitors;
    command = input[index++];
  }
  if (command === "Movie time!") {
    console.log(`There are ${capacity} seats left in the cinema.`);
  } else {
    console.log("The cinema is full.");
  }
  console.log(`Cinema income - ${income} lv.`);
}
cinema(["50", "15", "10", "10", "15", "5"]);
