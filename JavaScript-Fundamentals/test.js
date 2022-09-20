function sleepyTomCat(input) {
  let year = 365;
  let freeDays = Number(input[0]);
  let workDays = year - freeDays;
  let workDaysPlay = 63;
  let freeDaysPlay = 127;
  let playTimeCatMinutes = 30000;
  let allTimePlay = workDays * workDaysPlay + freeDays * freeDaysPlay;
  let difference = Math.abs(playTimeCatMinutes - allTimePlay);
  let diffH = Math.trunc(difference / 60);
  let diffM = Math.trunc(difference % 60);

  if (Math.abs(allTimePlay > playTimeCatMinutes)) {
    console.log("Tom will run away");
    console.log(`${diffH} hours and ${diffM} minutes more for play`);
  } else {
    console.log("Tom sleeps well");
    console.log(`${diffH} hours and ${diffM} minutes less for play`);
  }
}
sleepyTomCat(["113"]);
