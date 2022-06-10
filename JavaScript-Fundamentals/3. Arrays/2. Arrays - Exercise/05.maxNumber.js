function maxNumber(arr) {
  let total = [];
  for (let i = 0; i < arr.length; i++) {
    let isTopInt = true;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] <= arr[j]) {
        isTopInt = false;
        break;
      }
    }
    if (isTopInt) {
      total.push(arr[i]);
    }
  }
  console.log(total.join(" "));
}
maxNumber([1, 4, 3, 2]);
maxNumber([14, 24, 3, 19, 15, 17]);
