function harvest(input) {
  let wineYardSqM = Number(input[0]);
  let grapePerSqM = Number(input[1]);
  let neededLitresWine = Number(input[2]);
  let employees = Number(input[3]);
  let neededGrapePerLitre = 2.5;

  let grape = wineYardSqM * grapePerSqM * 40 / 100;
  let litres = grape / neededGrapePerLitre;
  let diff = Math.abs(litres - neededLitresWine);

  if (litres < neededLitresWine) {
    console.log(
      `It will be a tough winter! More ${Math.floor(diff)} liters wine needed.`
    );
  } else if (litres >= neededLitresWine) {
    console.log(
      `Good harvest this year! Total wine: ${Math.floor(litres)} liters.`
    );
    let leftWine = diff / employees;
    console.log(
      `${Math.ceil(diff)} liters left -> ${Math.ceil(
        leftWine
      )} liters per person.`
    );
  }
}
harvest(["1020", "1.5", "425", "4"]);
