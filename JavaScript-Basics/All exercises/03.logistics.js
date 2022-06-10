function logistics(input) {
  let index = 0;
  let cargoCount = Number(input[index++]);

  let pricePerTonBus = 200; // до 3 тона
  let pricePerTonTruck = 175; // от 4 до 11 тона
  let pricePerTonTrain = 120; // 12 и повече тона

  let busCounterTon = 0;
  let truckCounterTon = 0;
  let trainCounterTon = 0;
  let totalPrice = 0;
  let totalWeight = 0;

  for (let i = 0; i < cargoCount; i++) {
    let weight = Number(input[index++]);
    totalWeight += weight;
    if (weight <= 3) {
      totalPrice += pricePerTonBus * weight;
      busCounterTon += weight;
    } else if (weight >= 4 && weight <= 11) {
      totalPrice += pricePerTonTruck * weight;
      truckCounterTon += weight;
    } else {
      totalPrice += pricePerTonTrain * weight;
      trainCounterTon += weight;
    }
  }
  let averagePricePerTon = totalPrice / totalWeight;
  let busPerCent = (busCounterTon / totalWeight) * 100;
  let truckPerCent = (truckCounterTon / totalWeight) * 100;
  let trainPerCent = (trainCounterTon / totalWeight) * 100;

  console.log(`${averagePricePerTon.toFixed(2)}`);
  console.log(`${busPerCent.toFixed(2)}%`);
  console.log(`${truckPerCent.toFixed(2)}%`);
  console.log(`${trainPerCent.toFixed(2)}%`);
}
logistics(["5", "2", "10", "20", "1", "7"]);
