function worldSwimmingRecord(input) {
  const swimmingWR = Number(input[0]);
  const meters = Number(input[1]);
  const secondsForOneMeter = Number(input[2]);

  const addedSeconds = Math.floor(meters / 15) * 12.5;
  const totalSeconds = secondsForOneMeter * meters + addedSeconds;

  if (totalSeconds < swimmingWR) {
    console.log(
      `Yes, he succeeded! The new world record is ${totalSeconds.toFixed(2)} seconds.`
    );
  } else {
    const secondsSlower = totalSeconds - swimmingWR;
    console.log(`No, he failed! He was ${secondsSlower.toFixed(2)} seconds slower.`);
  }
}
worldSwimmingRecord(["55555.67", "3017", "5.03"]);
