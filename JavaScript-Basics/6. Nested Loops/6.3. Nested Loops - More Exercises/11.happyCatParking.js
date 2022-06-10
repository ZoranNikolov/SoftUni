function happyCatParking(input) {
  let days = Number(input[0]);
  let hoursPerDay = Number(input[1]);
  let sumPerDay = 0;
  let totalSum = 0;

  for (let i = 1; i <= days; i++) {
    let curDay = i;
    for (let j = 1; j <= hoursPerDay; j++) {
      let curHour = j;
      let tempSum = 0;
      if (curDay % 2 === 0 && curHour % 2 !== 0) {
        tempSum += 2.5;
      } else if (curDay % 2 !== 0 && curHour % 2 === 0) {
        tempSum += 1.25;
      } else {
        tempSum += 1;
      }
      sumPerDay += tempSum;
    }
    console.log(`Day: ${curDay} - ${sumPerDay.toFixed(2)} leva`);
    totalSum += sumPerDay;
    sumPerDay = 0;
  }
  console.log(`Total: ${totalSum.toFixed(2)} leva`);
}
happyCatParking(["2", "5"]);
happyCatParking(["5", "2"]);
