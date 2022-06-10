// // function nums(input) {
// //   let n = String(input[0]);
// //   let sum = 0;
// //   let index = 0;

// //   do {
// //     sum = sum + Number(n.charAt(index));
// //     index++;
// //   } while (index !== n.length);
// //   console.log(`The sum of the digits is:${sum}`);
// // }

// // nums(["11111111111111111"]);

// // function nums(input) {

// //   let n = input[0];
// //   let sum = 0;

// //       do {
// //           sum = sum + (n % 10)
// //           n = parseInt(n / 10)
// //           }
// //   while (n !== 0);
// //   console.log(`The sum of the digits is:${sum}`);

// //   }

// function journey(input) {
//   let budget = Number(input[0]);
//   let season = input[1];
//   let used = 0;

//   if (budget <= 100) {
//     if (season === "summer") {
//       used = budget * 0.3;
//       console.log(`Somewhere in Bulgaria`);
//       console.log(`Camp - ${used.toFixed(2)}`);
//     } else {
//       used = budget * 0.7;
//       console.log(`Somewhere in Bulgaria`);
//       console.log(`Hotel - ${used.toFixed(2)}`);
//     }
//   } else if (budget <= 1000) {
//     if (season === "summer") {
//       used = budget * 0.4;
//       console.log(`Somewhere in Balkans`);
//       console.log(`Camp - ${used.toFixed(2)}`);
//     } else {
//       used = budget * 0.8;
//       console.log(`Somewhere in Balkans`);
//       console.log(`Hotel - ${used.toFixed(2)}`);
//     }
//   } else {
//     used = budget * 0.9;
//     if (season === "summer") {
//       console.log(`Somewhere in Europe`);
//       console.log(`Camp - ${used.toFixed(2)}`);
//     } else {
//       console.log(`Somewhere in Europe`);
//       console.log(`Hotel - ${used.toFixed(2)}`);
//     }
//   }
// }
// journey(["1500", "summer"]);
// function journey1(input) {
//   const budget = Number(input[0]);
//   const season = input[1];
//   let finalMoney = 0;

//   if (budget <= 100) {
//     if (season === "summer") {
//       finalMoney = budget * 0.3;
//       console.log("Somewhere in Bulgaria");
//       console.log(`Camp - ${finalMoney.toFixed(2)}`);
//     } else {
//       finalMoney = budget * 0.7;
//       console.log("Somewhere in Bulgaria");
//       console.log(`Hotel - ${finalMoney.toFixed(2)}`);
//     }
//   } else if (budget > 100 && budget <= 1000) {
//     if (season === "summer") {
//       finalMoney = budget * 0.4;
//       console.log("Somewhere in Balkans");
//       console.log(`Camp - ${finalMoney.toFixed(2)}`);
//     } else {
//       finalMoney = budget * 0.8;
//       console.log("Somewhere in Balkans");
//       console.log(`Hotel - ${finalMoney.toFixed(2)}`);
//     }
//   } else {
//     finalMoney = budget * 0.9;
//     console.log("Somewhere in Europe");
//     console.log(`Hotel - ${finalMoney.toFixed(2)}`);
//   }
// }
// journey1(["1500", "summer"]);
