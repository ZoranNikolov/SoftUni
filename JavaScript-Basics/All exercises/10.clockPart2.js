function clockPart2(input) {
  let hours = 0;
  let minutes = 0;
  let seconds = 0;

  for (let i = 0; i < 24; i++) {
    for (let j = 0; j < 60; j++) {
      for (let k = 0; k < 60; k++) {
        console.log(`${hours} : ${minutes} : ${seconds}`);
        seconds++;
      }
      minutes++;
      seconds = 0;
    }
    hours++;
    minutes = 0;
  }
}
clockPart2();
