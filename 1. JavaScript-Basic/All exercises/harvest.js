function harvest(input) {
  const vineYardArea = Number(input[0]);
  const grapePerSqM = Number(input[1]);
  const litresWineNeeded = Number(input[2]);
  const numberOfEmplyees = Number(input[3]);

  const totalWineLitres = (vineYardArea * grapePerSqM * 0.4) / 2.5;

  const difference = Math.abs(totalWineLitres - litresWineNeeded);
  const surplusWine = difference / numberOfEmplyees;

  if (totalWineLitres < litresWineNeeded) {
    console.log(
      `It will be a tough winter! More ${Math.floor(
        difference
      )} liters wine needed.`
    );
  } else if (totalWineLitres >= litresWineNeeded) {
    console.log(
      `Good harvest this year! Total wine: ${Math.floor(
        totalWineLitres
      )} liters.`
    );
    console.log(
      `${Math.ceil(difference)} liters left -> ${Math.ceil(
        surplusWine
      )} liters per person.`
    );
  }
}
harvest(["1020", "1.5", "425", "4"]);
