function skeleton(input) {
  let controlMins = Number(input[0]);
  let controlSecs = Number(input[1]);
  let lengthM = Number(input[2]);
  let secondsPer100M = Number(input[3]);

  controlSecs += controlMins * 60;

  let totalTime = (lengthM / 100) * secondsPer100M - (lengthM / 120) * 2.5;

  if (totalTime <= controlSecs) {
    console.log("Marin Bangiev won an Olympic quota!");
    console.log(`His time is ${totalTime.toFixed(3)}.`);
  } else {
    let diff = totalTime - controlSecs;
    console.log(`No, Marin failed! He was ${diff.toFixed(3)} second slower.`);
  }
}
skeleton(["2", "12", "1200", "10"]);