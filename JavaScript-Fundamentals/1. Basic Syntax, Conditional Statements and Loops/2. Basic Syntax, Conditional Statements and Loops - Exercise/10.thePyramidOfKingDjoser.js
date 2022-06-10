function thePyramidOfKingDjoser(baseWL, increment) {
  let stone = 0;
  let marble = 0;
  let lapis = 0;
  let gold = 0;
  let counter = 0;
  let innerArea = 0;

  for (let i = baseWL; i > 0; i -= 2) {
    let areaTotal = i * i;
    counter++;
    if (i - 2 <= 0) {
      gold += areaTotal * increment;
    } else {
      let innerBaseWL = i - 2;
      innerArea = innerBaseWL * innerBaseWL;
      stone += innerArea * increment;
      if (counter % 5 === 0) {
        lapis += (areaTotal - innerArea) * increment;
      } else {
        marble += (areaTotal - innerArea) * increment;
      }
    }
  }
  let height = counter * increment;
  console.log(`Stone required: ${Math.ceil(stone)}`);
  console.log(`Marble required: ${Math.ceil(marble)}`);
  console.log(`Lapis Lazuli required: ${Math.ceil(lapis)}`);
  console.log(`Gold required: ${Math.ceil(gold)}`);
  console.log(`Final pyramid height: ${Math.floor(height)}`);
}
thePyramidOfKingDjoser(11, 1);
// thePyramidOfKingDjoser(11, 0.75);
// thePyramidOfKingDjoser(12, 1);
// thePyramidOfKingDjoser(23, 0.5);
