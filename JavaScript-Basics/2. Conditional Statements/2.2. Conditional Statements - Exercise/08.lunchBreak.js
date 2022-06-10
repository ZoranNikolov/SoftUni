function lunchBreak(input) {
  let name = input[0];
  let episodeDur = Number(input[1]);
  let breakDuration = Number(input[2]);

  let timeForEating = breakDuration / 8;
  let timeToRest = breakDuration / 4;

  let leftTime = Math.abs(breakDuration - timeForEating - timeToRest);

  let diff = Math.ceil(Math.abs(leftTime - episodeDur));
  if (diff >= episodeDur) {
    console.log(
      `You have enough time to watch ${name} and left with ${diff} minutes free time.`
    );
  } else {
    console.log(
      `You don't have enough time to watch ${name}, you need ${diff} more minutes.`
    );
  }
}
lunchBreak(["Teen Wolf",
"48",
"60"])

