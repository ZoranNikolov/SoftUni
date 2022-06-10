function sumEvenNumbers(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    array[i] = Number(array[i]);
    if (array[i] % 2 === 0) {
      sum += array[i];
    }
  }
  console.log(sum);
}
sumEvenNumbers(["1", "2", "3", "4", "5", "6"]);

// function sumEvenNumbers(array) {
//   let sum = 0;
//   for (let num of array) {
//     num = Number(num);
//     if (num % 2 === 0) {
//       sum += num;
//     }
//   }
//   console.log(sum);
// }
// sumEvenNumbers(["1", "2", "3", "4", "5", "6"]);
