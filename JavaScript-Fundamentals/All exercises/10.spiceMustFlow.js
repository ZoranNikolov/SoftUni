function spiceMustFlow(yield) {
  let day = 0;
  let extractedSpice = 0;

  while (yield >= 100) {
    extractedSpice += yield - 26;
    yield -= 10;
    day++;
  }
  extractedSpice -= 26;
  console.log(day);
  console.log(`${Math.max(extractedSpice, 0)}`);
}
spiceMustFlow(111);
spiceMustFlow(450);
