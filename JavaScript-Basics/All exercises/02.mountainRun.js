function mountainRun(input) {
  let recordSec = Number(input[0]);
  let distanceM = Number(input[1]);
  let timeSecPerMeter = Number(input[2]);

  let delayTimeSec = Math.floor(distanceM / 50) * 30;
  let timeToTravel = distanceM * timeSecPerMeter + delayTimeSec;

  if (timeToTravel < recordSec) {
    console.log(`Yes! The new record is ${timeToTravel.toFixed(2)} seconds.`);
  } else {
    let diff = Math.abs(timeToTravel - recordSec);
    console.log(`No! He was ${diff.toFixed(2)} seconds slower.`);
  }
}
mountainRun(["10164", "1400", "25"]);
