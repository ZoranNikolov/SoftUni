function worldSwimmingRecord(input) {
  let WRsec = Number(input[0]);
  let distanceMetres = Number(input[1]);
  let timeSecPerMetre = Number(input[2]);

  let waterResistancePer15Metre = 12.5;

  let totalDelay = Math.floor(distanceMetres / 15) * waterResistancePer15Metre;
  let time = timeSecPerMetre * distanceMetres + totalDelay;
  let diff = Math.abs(time - WRsec);

  if (time < WRsec) {
    console.log(
      `Yes, he succeeded! The new world record is ${time.toFixed(2)} seconds.`
    );
  } else {
    console.log(`No, he failed! He was ${diff.toFixed(2)} seconds slower.`);
  }
}
worldSwimmingRecord(["55555.67", "3017", "5.03"]);
