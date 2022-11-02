function rotation(arr, n) {
  while (n > 0) {
    let elementToMove = arr.shift();
    arr.push(elementToMove);
    n--;
  }
  console.log(arr.join(" "));
}
rotation([51, 47, 32, 61, 21], 2);
