function clock(input) {
  for (let h = 0; h < 24; h++) {
    for (let m = 0; m < 60; m++) {
      console.log(`${h}:${m}`);
    }
  }
}
clock();
