function trekkingMania(input) {
  let index = 0;
  let count = Number(input[index]);
  index++;
  let musalaP = 0;
  let monblanP = 0;
  let kiliP = 0;
  let k2P = 0;
  let everestP = 0;

  let groupSize = 0;

  for (let i = 0; i < count; i++) {
    groupSize = Number(input[index]);
    index++;
    if (groupSize <= 5) {
      musalaP += groupSize;
    } else if (groupSize >= 6 && groupSize <= 12) {
      monblanP += groupSize;
    } else if (groupSize >= 13 && groupSize <= 25) {
      kiliP += groupSize;
    } else if (groupSize >= 26 && groupSize <= 40) {
      k2P += groupSize;
    } else {
      everestP += groupSize;
    }
  }
  let totalPeople = musalaP + monblanP + kiliP + k2P + everestP;
  console.log(`${((musalaP / totalPeople) * 100).toFixed(2)}%`);
  console.log(`${((monblanP / totalPeople) * 100).toFixed(2)}%`);
  console.log(`${((kiliP / totalPeople) * 100).toFixed(2)}%`);
  console.log(`${((k2P / totalPeople) * 100).toFixed(2)}%`);
  console.log(`${((everestP / totalPeople) * 100).toFixed(2)}%`);
}
trekkingMania([
  "10",
  "10",
  "5",
  "1",
  "100",
  "12",
  "26",
  "17",
  "37",
  "40",
  "78",
]);
