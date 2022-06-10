function shopping(input) {
  let budget = Number(input[0]);
  let vidNumber = Number(input[1]);
  let procNumber = Number(input[2]);
  let ramNumber = Number(input[3]);

  let vidPrice = 250;
  let vidPriceT = vidPrice * vidNumber;

  let procPrice = (vidPriceT * 35) / 100;
  let ramPrice = (vidPriceT * 10) / 100;

  let totalPrice = vidPriceT + procPrice * procNumber + ramPrice * ramNumber;

  if (vidNumber > procNumber) {
    totalPrice -= (totalPrice * 15) / 100;
  }

  let diff = Math.abs(totalPrice - budget);

  if (budget >= totalPrice) {
    console.log(`You have ${diff.toFixed(2)} leva left!`);
  } else {
    console.log(`Not enough money! You need ${diff.toFixed(2)} leva more!`);
  }
}
shopping(["920.45", "3", "1", "1"]);
