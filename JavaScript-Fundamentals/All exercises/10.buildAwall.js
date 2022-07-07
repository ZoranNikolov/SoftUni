function buildAwall(array) {
  let crews = array.slice().map(Number);
  let concreteCostRate = 195;
  let neededHeight = 30;
  let totalCost = 0;
  let totalDailyCostArr = [];
  let isBuilt = false;

  while (true) {
    let dailyCounter = 0;

    for (let i = 0; i < crews.length; i++) {
      if (crews[i] === neededHeight) {
        let index = crews.indexOf(crews[i]);
        crews.splice(index, 1);

        if (crews.length === 0) {
          isBuilt = true;
          break;
        }

        i--;
      } else {
        crews[i]++;
        dailyCounter++;
      }
    }

    if (isBuilt) {
      break;
    }

    totalDailyCostArr.push(dailyCounter * concreteCostRate);
    totalCost += dailyCounter * concreteCostRate * 1900;
  }
  console.log(totalDailyCostArr.join(", "));
  console.log(`${totalCost} pesos`);
}
buildAwall(["21", "25", "28"]);
buildAwall([17]);
buildAwall([17, 22, 17, 19, 17]);
