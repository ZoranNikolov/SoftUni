function repainting(input) {
  let nylonSqM = Number(input[0]);
  let paintLitres = Number(input[1]);
  let detergentLitres = Number(input[2]);
  let hours = Number(input[3]);

  let nylonPrice = 1.5;
  let paintPrice = 14.5;
  let detergentPrice = 5.0;
  paintLitres += paintLitres * 0.1;
  nylonSqM += 2;

  let sumMaterials =
    nylonSqM * nylonPrice +
    paintLitres * paintPrice +
    detergentLitres * detergentPrice +
    0.4;

  let pricePerHour = sumMaterials * 0.3;
  let totalSum = pricePerHour * hours + sumMaterials;

  console.log(totalSum);
}
repainting(["10 ", "11 ", "4 ", "8 "]);


