function equalArrays(arr1, arr2) {
  let isEqual = true;
  let sumArr1 = 0;
  let indexUnidentical = 0;

  for (let i = 0; i < arr1.length; i++) {
    arr1[i] = Number(arr1[i]);
    arr2[i] = Number(arr2[i]);
    if (arr1[i] !== arr2[i]) {
      indexUnidentical = i;
      isEqual = false;
      break;
    }
    sumArr1 += arr1[i];
  }
  if (isEqual) {
    console.log(`Arrays are identical. Sum: ${sumArr1}`);
  } else {
    console.log(
      `Arrays are not identical. Found difference at ${indexUnidentical} index`
    );
  }
}
equalArrays(["10", "20", "30"], ["10", "20", "30"]);
equalArrays(["1", "2", "3", "4", "5"], ["1", "2", "4", "4", "5"]);
equalArrays(["1"], ["10"]);