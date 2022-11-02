function negativeOrPositiveNumbers(array) {
  let result = [];

  for (let el of array) {
    if (Number(el) < 0) {
      result.unshift(el);
    } else {
      result.push(el);
    }
  }
  console.log(result.join("\n"));
}
negativeOrPositiveNumbers(["7", "-2", "8", "9"]);
negativeOrPositiveNumbers(["3", "-2", "0", "-1"]);
