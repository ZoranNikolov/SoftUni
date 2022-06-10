function footballLeague(input) {
  let index = 0;
  let stadiumCapacity = Number(input[index++]);
  let fansAmount = Number(input[index++]);
  let sector = "";
  let aCounter = 0;
  let bCounter = 0;
  let vCounter = 0;
  let gCounter = 0;

  for (let i = 0; i < fansAmount; i++) {
    sector = input[index++];
    switch (sector) {
      case "A":
        aCounter++;
        break;
      case "B":
        bCounter++;
        break;
      case "V":
        vCounter++;
        break;
      case "G":
        gCounter++;
        break;
    }
  }
  let totalFans = aCounter + bCounter + vCounter + gCounter;
  let aPercent = (aCounter / fansAmount) * 100;
  let bPercent = (bCounter / fansAmount) * 100;
  let vPercent = (vCounter / fansAmount) * 100;
  let gPercent = (gCounter / fansAmount) * 100;
  let totalFansStadium = (fansAmount / stadiumCapacity) * 100;

  console.log(`${aPercent.toFixed(2)}%`);
  console.log(`${bPercent.toFixed(2)}%`);
  console.log(`${vPercent.toFixed(2)}%`);
  console.log(`${gPercent.toFixed(2)}%`);
  console.log(`${totalFansStadium.toFixed(2)}%`);
}
footballLeague(["76", "10", "A", "V", "V", "V", "G", "B", "A", "V", "B", "B"]);
