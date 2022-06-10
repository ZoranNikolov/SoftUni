function profit(input) {
  let banknote1Lv = Number(input[0]);
  let banknote2Lv = Number(input[1]);
  let banknote5Lv = Number(input[2]);
  let sum = Number(input[3]);

  for (let i = 0; i <= banknote1Lv; i++) {
    let countOfBanknotes1Lv = i;
    for (let j = 0; j <= banknote2Lv; j++) {
      let countOfBanknotes2Lv = j;
      for (let k = 0; k <= banknote5Lv; k++) {
        let countOfBanknotes5Lv = k;
        let amount5Lv = countOfBanknotes5Lv * 5;
        let amount2Lv = countOfBanknotes2Lv * 2;
        let amount1Lv = countOfBanknotes1Lv * 1;
        if (sum - (amount5Lv + amount2Lv + amount1Lv) === 0) {
          console.log(
            `${countOfBanknotes1Lv} * 1 lv. + ${countOfBanknotes2Lv} * 2 lv. + ${countOfBanknotes5Lv} * 5 lv. = ${sum} lv.`
          );
        }
      }
    }
  }
}
profit(["3", "2", "3", "10"]);
profit(["5", "3", "1", "7"]);