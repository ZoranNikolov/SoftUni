function searchForAnumber(array, searchArr) {
  let newArr = [];
  let elementsToTake = searchArr[0];
  let elementsToDelete = searchArr[1];
  let searchedNumber = searchArr[2];

  let takenElements = array.slice(0, elementsToTake);
  newArr.push(...takenElements);
  newArr.splice(0, elementsToDelete);

  let counter = newArr.filter((x) => x === searchedNumber).length;

  console.log(`Number ${searchedNumber} occurs ${counter} times.`);
}
searchForAnumber([5, 2, 3, 4, 1, 6], [5, 2, 3]);
searchForAnumber([7, 1, 5, 8, 2, 7], [3, 1, 5]);
