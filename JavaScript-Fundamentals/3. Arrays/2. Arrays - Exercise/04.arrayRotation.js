function rotation(arr, n) {
  while (n > 0) {
    arr.push(arr.shift());
    n--;
  }
  console.log(arr.join(" "));
}
rotation([51, 47, 32, 61, 21], 2);
