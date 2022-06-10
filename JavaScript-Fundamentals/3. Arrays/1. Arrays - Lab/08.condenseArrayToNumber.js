function condense(array) {
  while (array.length > 1) {
    let condensedArr = [];
    for (let i = 0; i < array.length - 1; i++) {
      condensedArr.push(array[i] + array[i + 1]);
    }
    array = condensedArr;
  }
  console.log(array[0]);
}
condense([5, 0, 4, 1, 2]);
