function fuelTank(input) {
  const fuelType = input[0];
  const litresFuelLeft = Number(input[1]);

  if (fuelType == "Diesel" || fuelType == "Gasoline" || fuelType == "Gas") {
    if (litresFuelLeft >= 25) {
      console.log(`You have enough ${fuelType.toLowerCase()}.`);
    } else {
      console.log(`Fill your tank with ${fuelType.toLowerCase()}!`);
    }
  } else {
    console.log(`Invalid fuel!`);
  }
}
fuelTank(["Diesel", "10"]);

















//   if (fuelType == 'Diesel') {
//       if (litresFuelLeft >= 25) {
//           console.log(`You have enough ${fuelType.toLowerCase()}.`);
//       } else {
//         console.log(`Fill your tank with ${fuelType.toLowerCase()}!`);
//       }
//   } else if (fuelType == 'Gasoline') {
//     if (litresFuelLeft >= 25) {
//         console.log(`You have enough ${fuelType.toLowerCase()}.`);
//     } else {
//       console.log(`Fill your tank with ${fuelType.toLowerCase()}!`);
//   }
// } else if (fuelType == 'Gas') {
//     if (litresFuelLeft >= 25) {
//         console.log(`You have enough ${fuelType.toLowerCase()}.`);
//     } else {
//       console.log(`Fill your tank with ${fuelType.toLowerCase()}!`);
//   }
//   } else {
//     console.log(`Invalid fuel!`);
// }
