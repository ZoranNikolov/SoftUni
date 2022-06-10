function vacation(input) {
  let index = 0;
  let vacationPrice = Number(input[index]);
  index++;
  let availableMoney = Number(input[index]);
  index++;
  let spendCounter = 0;
  let dayCounter = 0;

  while (availableMoney < vacationPrice) {
    let spendOrSave = input[index];
    index++;
    let money = Number(input[index]);
    index++;
    dayCounter++;
    if (spendOrSave == "spend") {
      availableMoney -= money;
      if (availableMoney < 0) {
        availableMoney = 0;
      }
      spendCounter++;
    } else if (spendOrSave == "save") {
      spendCounter = 0;
      availableMoney += money;
    }
    if (spendCounter >= 5) {
      console.log(`You can't save the money.`);
      console.log(`${spendCounter}`);
      break;
    }
  }
  if (availableMoney >= vacationPrice) {
    console.log(`You saved the money for ${dayCounter} days.`);
  }
}
vacation([
  "110",

  "60",

  "spend",

  "10",

  "spend",

  "10",

  "spend",

  "10",

  "spend",

  "10",
  "spend",
  "10",
]);
