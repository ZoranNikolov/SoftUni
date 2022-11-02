function sleepyTomCat(input) {
  const holydaysPerYear = Number(input[0]);

  const neededPlayTimePerYear = 30000;

  const busyDayPlayTimePerDay = 63;
  const holydayPlayTimePerDay = 127;

  const daysPerYear = 365;

  const totalPlayTime =
    holydaysPerYear * holydayPlayTimePerDay +
    busyDayPlayTimePerDay * (daysPerYear - holydaysPerYear);

  const difference = Math.abs(neededPlayTimePerYear - totalPlayTime);
  const differenceHours = Math.floor(difference / 60);
  const differenceMinutes = difference % 60;

  if (totalPlayTime > neededPlayTimePerYear) {
    console.log("Tom will run away");
    console.log(
      `${differenceHours} hours and ${differenceMinutes} minutes more for play`
    );
  } else {
    console.log(`Tom sleeps well`);
    console.log(
      `${differenceHours} hours and ${differenceMinutes} minutes less for play`
    );
  }
}
sleepyTomCat(["113"]);
