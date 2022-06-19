function reverseInPlace(arr) {
  let endIndex = arr.length - 1;
  for (
    let startIndex = 0, endIndex = arr.length - 1;
    startIndex < arr.length / 2;
    startIndex++, endIndex--
  ) {
    let tempValue = arr[startIndex];
    arr[startIndex] = arr[endIndex];
    arr[endIndex] = tempValue;
  }
  console.log(arr.join(" "));
  // let revArr = [];
  // for (let i = arr.length - 1; i >= 0; i--) {
  //   revArr.push(arr[i]);
  // }
  // console.log(revArr.join(" "));
}
reverseInPlace(["a", "b", "c", "d", "e"]);
