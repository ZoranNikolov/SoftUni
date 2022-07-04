function firstAndLastKNumbers(array) {
  let k = array.shift();
  let firstElements = array.slice(0, k);
  let lastElements = array.slice(-k);
  console.log(`${firstElements.join(" ")}\n${lastElements.join(" ")}`);
}
firstAndLastKNumbers([2, 7, 8, 9]);
firstAndLastKNumbers([3, 6, 7, 8, 9]);
