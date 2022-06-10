function cleverLily(input) {
  let age = Number(input[0]);
  let washingMachinePrice = Number(input[1]);
  let toyPrice = Number(input[2]);
  let tempMoney = 10;
  let money = 0;
  let toyCounter = 0;

  for (let i = 1; i <= age; i++) {
    if (i % 2 === 0) {
      money += tempMoney;
      tempMoney += 10;
      money -= 1;
    } else {
      toyCounter++;
    }
  }

  money += toyCounter * toyPrice;

  let diff = Math.abs(money - washingMachinePrice).toFixed(2);
  if (money >= washingMachinePrice) {
    console.log(`Yes! ${diff}`);
  } else {
    console.log(`No! ${diff}`);
  }
}
cleverLily(["21", "1570.98", "3"]);
