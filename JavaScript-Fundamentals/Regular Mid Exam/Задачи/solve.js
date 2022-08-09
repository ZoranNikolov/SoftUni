function arrangeNums(s) {
  function getSum(num) {
    return num
      .split("")
      .map((n) => parseInt(n))
      .reduce((acc, curr) => acc + curr, 0);
  }

  return s
    .split(" ")
    .sort((a, b) => getSum(a) - getSum(b))
    .join(" ");
}

let strng = arr.join(" ");
console.log(arrangeNums(strng));

console.log(sortArray([23, 31, 7, 47, 123, 55]));
