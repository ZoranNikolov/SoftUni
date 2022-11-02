function time15Minutes(input) {
  let hours = Number(input[0]);
  let mins = Number(input[1]);

  let extraTime = 15;

  let actualTime = extraTime + mins;

  if (actualTime > 59) {
    hours += 1;
    if (hours >= 24) {
      hours = 0;
    }
    actualTime = actualTime % 60;
    if (actualTime < 10) {
      console.log(`${hours}:0${actualTime}`);
    } else {
      console.log(`${hours}:${actualTime}`);
    }
  } else {
    console.log(`${hours}:${actualTime}`);
  }
}
time15Minutes(["12", "49"]);
