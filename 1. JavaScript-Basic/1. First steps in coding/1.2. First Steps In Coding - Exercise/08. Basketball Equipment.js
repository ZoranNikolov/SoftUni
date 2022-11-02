function basketballEquipment(input) {
  let yearTax = Number(input[0]);

  let sneakers = yearTax * 0.6;
  let kit = sneakers * 0.8;
  let ball = kit / 4;
  let accessories = ball / 5;

  let totalSum = yearTax + sneakers + kit + ball + accessories;

  console.log(totalSum);
}
basketballEquipment(["365 "]);
