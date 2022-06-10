function toyShop(input) {
  const puzzlePrice = 2.6;
  const talkingDollPrice = 3.0;
  const teddyBearPrice = 4.1;
  const minionPrice = 8.2;
  const truckPrice = 2.0;

  const vacationPrice = Number(input[0]);
  const puzzleCount = Number(input[1]);
  const talkingDollCount = Number(input[2]);
  const teddyBearCount = Number(input[3]);
  const minionCount = Number(input[4]);
  const truckCount = Number(input[5]);

  const totalToyCount =
    puzzleCount + talkingDollCount + teddyBearCount + minionCount + truckCount;
  let totalToyPrice =
    puzzleCount * puzzlePrice +
    talkingDollCount * talkingDollPrice +
    teddyBearCount * teddyBearPrice +
    minionCount * minionPrice +
    truckCount * truckPrice;

  if (totalToyCount >= 50) {
    totalToyPrice *= 0.75;
  }

  totalToyPrice *= 0.9;

  const difference = Math.abs(totalToyPrice - vacationPrice);

  if (totalToyPrice >= vacationPrice) {
    console.log(`Yes! ${difference.toFixed(2)} lv left.`);
  } else {
    console.log(`Not enough money! ${difference.toFixed(2)} lv needed.`);
  }
}
toyShop(["320", "8", "2", "5", "5", "1"]);
