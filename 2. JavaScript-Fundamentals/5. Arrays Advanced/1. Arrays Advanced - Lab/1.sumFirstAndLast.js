function sumFirstAndLast(array) {
  console.log(Number(array.shift()) + Number(array.pop()));
}
sumFirstAndLast(["20", "30", "40"]);
sumFirstAndLast(["5", "10"]);
