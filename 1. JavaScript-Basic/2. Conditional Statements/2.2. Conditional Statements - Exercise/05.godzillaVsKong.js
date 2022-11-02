function godzillaVsKong(input) {
  let budget = Number(input[0]);
  let statPeople = Number(input[1]);
  let clothesPrice = Number(input[2]);

  let decorPrice = (budget * 10) / 100;

  if (statPeople > 150) {
    clothesPrice -= (clothesPrice * 10) / 100;
  }
  let totalCost = clothesPrice * statPeople + decorPrice;
  let diff = Math.abs(totalCost - budget);

  if (budget >= totalCost) {
    console.log(`Action!\nWingard starts filming with ${diff.toFixed(
      2
    )} leva left.
      `);
  } else {
    console.log(`Not enough money!\nWingard needs ${diff.toFixed(2)} leva more.
      `);
  }
}
godzillaVsKong(["9587.88",
"222",
"55.68"])
