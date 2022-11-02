// function swapElements(arr) {
//   for (let i = 0; i < arr.length / 2; i++) {
//     swap(arr, i, arr.length - 1 - i);
//   }

//   console.log(arr.join(" "));

//   function swap(elements, i, j) {
//     let temp = elements[i];
//     elements[i] = elements[j];
//     elements[j] = temp;
//   }
// }
// swapElements([1, 2, 3, 4, 5]);

// function solve(x) {
//   console.log(x);
//   if (x > 0) {
//     solve(x - 1);
//   }
// }
// solve(5);

// function solve() {
//   let sum = (a, b) => a + b;

//   console.log(sum(5, 10));
// }
// solve();

// function aggregate(start, end, func) {
//   let result = 0;
//   for (result = start, i = start + 1; i <= end; i++) {
//     result = func(result, i);
//   }
//   return result;
// }
// console.log(aggregate(1, 10, (a, b) => a + b));
// console.log(aggregate(1, 10, (a, b) => a * b));
// console.log(aggregate(1, 10, (a, b) => "" + a + b));

