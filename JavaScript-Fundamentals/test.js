function worldSwimmingRecord(input) {
  let worldRecord = Number(input[0]);
  let distance = Number(input[1]);
  let timeInSec = Number(input[2]);

  let totalTime = distance * timeInSec;
  let addTime = Math.floor(distance / 15) * 12.5;

  let sumTime = totalTime + addTime;

  if (worldRecord <= sumTime) {
    slowTime = Math.abs(worldRecord - sumTime);
    console.log(`No, he failed! He was ${slowTime.toFixed(2)} seconds slower.`);
  } else {
    console.log(
      `Yes, he succeeded! The new world record is ${sumTime.toFixed(
        2
      )} seconds.`
    );
  }
}
worldSwimmingRecord(["55555.67", "3017", "5.03"]);