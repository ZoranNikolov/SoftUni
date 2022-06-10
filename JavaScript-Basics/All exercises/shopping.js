// function shopping(input) {
//   const budget = Number(input[0]);
//   const videoCardsAmount = Number(input[1]);
//   const processorsAmount = Number(input[2]);
//   const ramAmount = Number(input[3]);

//   const videoCardPrice = 250;
//   const videoCardsPrice = videoCardsAmount * videoCardPrice;
//   const processorPrice = videoCardsPrice * 0.35;
//   const ramPrice = videoCardsPrice * 0.1;

//   let totalSum =
//     videoCardsPrice + processorsAmount * processorPrice + ramAmount * ramPrice;

//   if (videoCardsAmount > processorsAmount) {
//     totalSum *= 0.85;
//   }
//   const difference = Math.abs(totalSum - budget).toFixed(2);
//   if (budget >= totalSum) {
//     console.log(`You have ${difference} leva left!`);
//   } else {
//     console.log(`Not enough money! You need ${difference} leva more!`);
//   }
// }
// shopping(["920.45", "3", "1", "1"]);

function shopping(input) {
  let budget = Number(input[0]);
  let videoCards = Number(input[1]);
  let procesors = Number(input[2]);
  let ramMemory = Number(input[3]);

  let videoCardsSum = videoCards * 250;
  let procesorSum = videoCardsSum - videoCardsSum * 0.65;
  let raMemoryPrice = videoCardsSum - videoCardsSum * 0.9;
  let taxRamMemory = raMemoryPrice * ramMemory;

  let finalPrice = videoCardsSum + procesorSum + taxRamMemory;
  if (videoCards > procesors) {
    finalPrice = finalPrice - finalPrice * 0.15;
  }
  if (finalPrice <= budget) {
    console.log(`You have ${(budget - finalPrice).toFixed(2)} leva left!`);
  } else {
    console.log(
      `Not enough money! You need ${(finalPrice - budget).toFixed(
        2
      )} leva more!`
    );
  }

}
shopping(["920.45", "3", "1", "1"]);