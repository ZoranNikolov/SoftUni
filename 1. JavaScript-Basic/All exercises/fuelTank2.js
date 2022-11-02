function fuelTank2(input) {
  const fuelType = input[0];
  const fuelAmount = Number(input[1]);
  const clubCard = input[2];

  const gasolinePricePerLitre = 2.22;
  const dieselPricePerLitre = 2.33;
  const gasPricePerLitre = 0.93;

  const cardGasolineDiscountPerLlitre = 0.18;
  const cardDieselDiscountPerLitre = 0.12;
  const cardGasDiscountPerLitre = 0.08;

  let totalPrice = 0;

  if (fuelType === "Gasoline") {
    totalPrice = fuelAmount * gasolinePricePerLitre;
    if (clubCard === "Yes") {
      totalPrice -= fuelAmount * cardGasolineDiscountPerLlitre;
    }
  } else if (fuelType === "Diesel") {
    totalPrice = fuelAmount * dieselPricePerLitre;
    if (clubCard === "Yes") {
      totalPrice -= fuelAmount * cardDieselDiscountPerLitre;
    }
  } else if (fuelType === "Gas") {
    totalPrice = fuelAmount * gasPricePerLitre;
    if (clubCard === "Yes") {
      totalPrice -= fuelAmount * cardGasDiscountPerLitre;
    }
  }
  if (fuelAmount > 25) {
    totalPrice *= 0.9;
    console.log(`${totalPrice.toFixed(2)} lv.`);
  } else if (fuelAmount >= 20 && fuelAmount <= 25) {
    totalPrice *= 0.92;
    console.log(`${totalPrice.toFixed(2)} lv.`);
  } else {
    console.log(`${totalPrice.toFixed(2)} lv.`);
  }
}
fuelTank2(["Gas", "30", "Yes"]);

// const cardGasolineDiscountPerLlitre = 0.18;
// const gasolineDiscountPerLitre = cardGasolineDiscountPerLlitre * fuelAmount;

// const cardDieselDiscountPerLitre = 0.12;
// const dieselDiscountPerLitre = cardDieselDiscountPerLitre * fuelAmount;

// const cardGasDiscountPerLitre = 0.08;
// const gasDiscount = cardGasDiscountPerLitre * fuelAmount;
// switch (fuelType) {
//   case "Gas":
//     switch (clubCard) {
//       case "Yes":
//         if (20 < fuelAmount && fuelAmount <= 25) {
//           let fuelTotalPrice =
//             (gasPricePerLitre * fuelAmount - gasDiscount) * 0.92;
//           console.log(`${fuelTotalPrice.toFixed(2)} lv.`);
//         } else if (fuelAmount > 25) {
//           let fuelTotalPrice =
//             (gasPricePerLitre * fuelAmount - gasDiscount) * 0.9;
//           console.log(`${fuelTotalPrice.toFixed(2)} lv.`);
//         } else {
//           let fuelTotalPrice = gasPricePerLitre * fuelAmount - gasDiscount;
//           console.log(`${fuelTotalPrice.toFixed(2)} lv.`);
//         }
//         break;
//       case "No":
//         if (20 < fuelAmount && fuelAmount <= 25) {
//           let fuelTotalPrice = gasPricePerLitre * fuelAmount * 0.92;
//           console.log(`${fuelTotalPrice.toFixed(2)} lv.`);
//         } else if (fuelAmount > 25) {
//           let fuelTotalPrice = gasPricePerLitre * fuelAmount * 0.9;
//           console.log(`${fuelTotalPrice.toFixed(2)} lv.`);
//         } else {
//           let fuelTotalPrice = gasPricePerLitre * fuelAmount;
//           console.log(`${fuelTotalPrice.toFixed(2)} lv.`);
//         }
//         break;
//     }
//     break;
//   case "Gasoline":
//     switch (clubCard) {
//       case "Yes":
//         if (20 < fuelAmount && fuelAmount <= 25) {
//           let fuelTotalPrice =
//             (gasolinePricePerLitre * fuelAmount - gasolineDiscountPerLitre) *
//             0.92;
//           console.log(`${fuelTotalPrice.toFixed(2)} lv.`);
//         } else if (fuelAmount > 25) {
//           let fuelTotalPrice =
//             (gasolinePricePerLitre * fuelAmount - gasolineDiscountPerLitre) *
//             0.9;
//           console.log(`${fuelTotalPrice.toFixed(2)} lv.`);
//         } else {
//           let fuelTotalPrice = gasolinePricePerLitre * fuelAmount;
//           console.log(`${fuelTotalPrice.toFixed(2)} lv.`);
//         }
//         break;
//       case "No":
//         if (20 < fuelAmount && fuelAmount <= 25) {
//           let fuelTotalPrice = gasolinePricePerLitre * fuelAmount * 0.92;
//           console.log(`${fuelTotalPrice.toFixed(2)} lv.`);
//         } else if (fuelAmount > 25) {
//           let fuelTotalPrice = gasolinePricePerLitre * fuelAmount * 0.9;
//           console.log(`${fuelTotalPrice.toFixed(2)} lv.`);
//         } else {
//           let fuelTotalPrice = gasolinePricePerLitre * fuelAmount;
//           console.log(`${fuelTotalPrice.toFixed(2)} lv.`);
//         }
//         break;
//     }
//     break;
//   case "Diesel":
//     switch (clubCard) {
//       case "Yes":
//         if (20 < fuelAmount && fuelAmount <= 25) {
//           let fuelTotalPrice =
//             (dieselPricePerLitre * fuelAmount - dieselDiscountPerLitre) *
//             0.92;
//           console.log(`${fuelTotalPrice.toFixed(2)} lv.`);
//         } else if (fuelAmount > 25) {
//           let fuelTotalPrice =
//             (dieselPricePerLitre * fuelAmount - dieselDiscountPerLitre) * 0.9;
//           console.log(`${fuelTotalPrice.toFixed(2)} lv.`);
//         } else {
//           let fuelTotalPrice = dieselPricePerLitre * fuelAmount;
//           console.log(`${fuelTotalPrice.toFixed(2)} lv.`);
//         }
//         break;
//       case "No":
//         if (20 < fuelAmount && fuelAmount <= 25) {
//           let fuelTotalPrice = dieselPricePerLitre * fuelAmount * 0.92;
//           console.log(`${fuelTotalPrice.toFixed(2)} lv.`);
//         } else if (fuelAmount > 25) {
//           let fuelTotalPrice = dieselPricePerLitre * fuelAmount * 0.9;
//           console.log(`${fuelTotalPrice.toFixed(2)} lv.`);
//         } else {
//           let fuelTotalPrice = dieselPricePerLitre * fuelAmount;
//           console.log(`${fuelTotalPrice.toFixed(2)} lv.`);
//           {
//             break;
//           }
//         }
//     }
// }
