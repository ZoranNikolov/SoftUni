function bitcoinMining(input) {
  let btcPrice = 11949.16;
  let gGoldPrice = 67.51;
  let counter = 0;
  let dayOfBuyintFirstBtc = 0;
  let totalIncome = 0;
  let btcCounter = 0;

  for (let i = 0; i < input.length; i++) {
    let currentIncome = gGoldPrice * input[i];
    counter++;
    if (counter % 3 === 0) {
      currentIncome *= 0.7;
    }
    totalIncome += currentIncome;
    if (totalIncome >= btcPrice) {
      btcCounter += Math.floor(totalIncome / btcPrice);
      totalIncome -= Math.floor(totalIncome / btcPrice) * btcPrice;
      if (dayOfBuyintFirstBtc === 0) {
        dayOfBuyintFirstBtc = counter;
      }
    }
  }
  console.log(`Bought bitcoins: ${btcCounter}`);
  if (dayOfBuyintFirstBtc > 0) {
    console.log(`Day of the first purchased bitcoin: ${dayOfBuyintFirstBtc}`);
  }
  console.log(`Left money: ${totalIncome.toFixed(2)} lv.`);
}
bitcoinMining([100, 200, 300]);
bitcoinMining([50, 100]);
bitcoinMining([3124.15, 504.212, 2511.124]);
