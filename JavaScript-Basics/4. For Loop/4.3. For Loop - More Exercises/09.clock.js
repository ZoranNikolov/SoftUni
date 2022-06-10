function clock(input) {
  let hours = 0;
  let minutes = 0;

  for (let j = 0; j < 24; j++) {
    for (let i = 0; i < 60; i++) {
      console.log(`${hours} : ${minutes}`);
      minutes++;
    }
    minutes = 0;
    hours++;
  }
}
clock();