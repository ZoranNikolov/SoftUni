function trekkingMania(input) {
  let index = 0;
  let numberGroups = Number(input[index++]);
  let peopleNumber = 0;

  let Musala = 0;
  let MontBlanc = 0;
  let Kilimangaro = 0;
  let K2 = 0;
  let Everest = 0;

  for (let i = 0; i < numberGroups; i++) {
    let num = Number(input[index++]);
    peopleNumber += num;
    if (num <= 5) {
      Musala += num;
    } else if (num >= 6 && num <= 12) {
      MontBlanc += num;
    } else if (num >= 13 && num <= 25) {
      Kilimangaro += num;
    } else if (num >= 26 && num <= 40) {
      K2 += num;
    } else if (num >= 41) {
      Everest += num;
    }
  }
  console.log(`${((Musala / peopleNumber) * 100).toFixed(2)}%`);
  console.log(`${((MontBlanc / peopleNumber) * 100).toFixed(2)}%`);
  console.log(`${((Kilimangaro / peopleNumber) * 100).toFixed(2)}%`);
  console.log(`${((K2 / peopleNumber) * 100).toFixed(2)}%`);
  console.log(`${((Everest / peopleNumber) * 100).toFixed(2)}%`);
}
trekkingMania(["5", "25", "41", "31", "250", "6"]);
