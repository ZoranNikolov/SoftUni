function equalSums(arr) {
  let arrL = arr.length;
  let isExists = false;
  let index = 'no';

  for (let i = 0; i < arrL; i++) {
    let leftSum = 0;
    let rightSum = 0;

    for (let j = 0; j < i; j++) {
      leftSum += arr[j];
    }

    for (let k = arrL - 1; k > i; k--) {
      rightSum += arr[k];
    }

    if (leftSum === rightSum) {
      isExists = true;
      index = i;
      break;
    }
  }

  console.log(index);
}
equalSums([1, 2, 3, 3]);
equalSums([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4])
equalSums([1, 2, 3])
equalSums([1])
