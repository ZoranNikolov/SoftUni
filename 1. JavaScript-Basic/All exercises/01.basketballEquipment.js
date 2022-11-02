function basketballEquipment(input) {
  let tax = Number(input[0]);
  let sneakers = tax * 0.6;
  let kit = sneakers * 0.8;
  let ball = kit / 4;
  let accessory = ball / 5;
  let sum = tax + sneakers + kit + ball + accessory;
  console.log(sum.toFixed(2));
}
basketballEquipment(["320"]);
