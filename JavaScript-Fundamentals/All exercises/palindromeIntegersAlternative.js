function palindromeIntegers(array) {

  for (let index = 0; index < array.length; index++) {

    let numToString = array[index].toString()
    let reversedString = numToString.split('').reverse().join("")

    console.log(numToString === reversedString ?
      true :
      false);

  }

}
palindromeIntegers([123, 323, 421, 121])

/*
function palindromeIntegers(array) {
  for (let el of array) {
    let current = String(el);
    let reversed = String(el).split("").reverse().join("");

    if (current === reversed) {
      console.log(true);
    } else {
      console.log(false);
    }
  }
}
palindromeIntegers([123, 323, 421, 121]);
palindromeIntegers([32, 2, 232, 1010]);
*/