function magicSum(array, num) {
  let arrayL = array.length;
  let validPair = "";
  let currentArray = [];

  for (let i = 0; i < arrayL; i++) {
    for (let j = i + 1; j < arrayL; j++) {
      if (array[i] + array[j] === num) {
        validPair = `${array[i]} ${array[j]}`;
        currentArray.push(validPair);
      }
    }
  }
  console.log(currentArray.join('\n'));
}
magicSum([1, 7, 6, 2, 19, 23], 8);
magicSum([14, 20, 60, 13, 7, 19, 8], 27);
magicSum([1, 2, 3, 4, 5, 6], 6);
