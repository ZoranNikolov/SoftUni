function vacation(input) {
  let index = 0;
  let excursionPrice = Number(input[index++]);
  let money = Number(input[index++]);
  let action = "";
  let currentMoney = 0;
  let daySpent = 0;
  let dayCounter = 0;

  while (money < excursionPrice) {
    action = input[index++];
    currentMoney = Number(input[index++]);
    dayCounter++;
    switch (action) {
      case "spend":
        money -= currentMoney;
        if (money < currentMoney) {
          money = 0;
        }
        daySpent++;
        break;
      case "save":
        money += currentMoney;
        daySpent = 0;
        break;
    }
    if (daySpent >= 5) {
      console.log(`You can't save the money.`);
      console.log(`${dayCounter}`);
      break;
    }
  }
  if (money >= excursionPrice) {
    console.log(`You saved the money for ${dayCounter} days.`);
  }
}
vacation([
  "250",
  "150",
  "spend",
  "50",
  "spend",
  "50",
  "save",
  "100",
  "save",
  "100",
]);
