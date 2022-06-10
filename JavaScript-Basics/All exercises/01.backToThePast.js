function backToThePast(input) {
  let index = 0;
  let inheritedMoney = Number(input[index++]);
  let yearToLive = Number(input[index++]);

  let ivanchoAge = 18;
  let actualYear = 1800;
  let moneyNeeded = 0;

  for (let i = actualYear; i <= yearToLive; i++) {
    if (actualYear % 2 === 0) {
      moneyNeeded += 12000;
    } else {
      moneyNeeded += 12000 + 50 * ivanchoAge;
    }
    ivanchoAge++;
    actualYear++;
  }
  let diff = Math.abs(inheritedMoney - moneyNeeded);

  if (inheritedMoney >= moneyNeeded) {
    console.log(
      `Yes! He will live a carefree life and will have ${diff.toFixed(
        2
      )} dollars left.`
    );
  } else {
    let diff = Math.abs(inheritedMoney - moneyNeeded);
    console.log(`He will need ${diff.toFixed(2)} dollars to survive.`);
  }
}
backToThePast(["100000.15", "1808"]);
