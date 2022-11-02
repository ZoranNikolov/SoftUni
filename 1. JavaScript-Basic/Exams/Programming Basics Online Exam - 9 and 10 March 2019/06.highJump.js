function highJump(input) {
  let index = 0;
  let target = Number(input[index++]);
  let currentTarget = target - 30;
  let counterJump = 0;
  let counterFailure = 0;

  while (currentTarget <= target) {
    let tempResult = Number(input[index++]);
    if (tempResult > currentTarget) {
      currentTarget += 5;
      counterFailure = 0;
    } else {
      counterFailure++;
    }
    counterJump++;
    if (counterFailure === 3) {
      break;
    }
  }
  if (counterFailure === 3) {
    console.log(
      `Tihomir failed at ${currentTarget}cm after ${counterJump} jumps.`
    );
  } else {
    console.log(
      `Tihomir succeeded, he jumped over ${target}cm after ${counterJump} jumps.`
    );
  }
}
highJump(["250", "225", "224", "225", "228", "231", "235", "234", "235"]);