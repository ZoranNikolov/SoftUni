function addAndSubstract(arr) {
  let sumOrigArr = 0;
  let sumNewArr = 0;
  let arrL = arr.length;
  let newArr = [];

  for (let i = 0; i < arrL; i++) {
    if (arr[i] % 2 === 0) {
      newArr.push(arr[i] + i);
    } else {
      newArr.push(arr[i] - i);
    }
    sumOrigArr += arr[i];
  }
  for (i = 0; i < newArr.length; i++) {
    sumNewArr += newArr[i];
  }

  console.log(newArr);
  console.log(sumOrigArr);
  console.log(sumNewArr);
}
addAndSubstract([5, 15, 23, 56, 35]);
addAndSubstract([-5, 11, 3, 0, 2]);
