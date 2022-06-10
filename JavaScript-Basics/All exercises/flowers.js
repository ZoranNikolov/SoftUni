function flowers(input) {
  const chrysanthemumSpringSummerPrice = 2;
  const chrysanthemumAutumnWinterPrice = 3.75;
  const roseSpringSummerPrice = 4.1;
  const roseAutumnWinterPrice = 4.5;
  const tulipSpringSummerPrice = 2.5;
  const tulipAutumnWinterPrice = 4.15;

  const chrysantemumNumber = Number(input[0]);
  const roseNumber = Number(input[1]);
  const tulipNumber = Number(input[2]);
  const season = input[3];
  const holiday = input[4];

  let totalSum = 0;

  switch (season) {
    case "Spring":
    case "Summer":
      totalSum =
        chrysantemumNumber * chrysanthemumSpringSummerPrice +
        roseNumber * roseSpringSummerPrice +
        tulipNumber * tulipSpringSummerPrice;
      break;
    case "Autumn":
    case "Winter":
      totalSum =
        chrysantemumNumber * chrysanthemumAutumnWinterPrice +
        roseNumber * roseAutumnWinterPrice +
        tulipNumber * tulipAutumnWinterPrice;
      break;
  }
  if (holiday === "Y") {
    totalSum *= 1.15;
  }
  if (season === "Spring" && tulipNumber > 7) {
    totalSum *= 0.95;
  } else if (season === "Winter" && roseNumber >= 10) {
    totalSum *= 0.9;
  }
  if (chrysantemumNumber + roseNumber + tulipNumber > 20) {
    totalSum *= 0.8;
  }
  totalSum += 2;
  console.log(totalSum.toFixed(2));
}
flowers(["2", "4", "8", "Spring", "Y"]);
flowers(["3", "10", "9", "Winter", "N"]);
flowers(["10", "10", "10", "Autumn", "N"]);