function sleepyTomCat(input) {
  let restDays = Number(input[0]);
  let neededMins = 30000;
  let workDayM = 63;
  let restDayM = 127;
  let daysYear = 365;

  let workDayTimeYearly = (daysYear - restDays) * workDayM;
  let restDayTimeYearly = restDays * restDayM;
  let totalTime = workDayTimeYearly + restDayTimeYearly;

  let diff = Math.abs(totalTime - neededMins);
  let diffH = Math.floor(diff / 60);
  let diffM = Math.floor(diff % 60);

  if (totalTime > neededMins) {
    console.log(
      `Tom will run away\n${diffH} hours and ${diffM} minutes more for play`
    );
  } else {
    console.log(
      `Tom sleeps well\n${diffH} hours and ${diffM} minutes less for play`
    );
  }
}
sleepyTomCat(["113"]);
