function sumOfNumbers(input) {
  let textNumber = String(input[0]);
  let sum = 0;

  for (let i = 0; i < textNumber.length; i++) {
    let num = Number(textNumber.charAt(i));
    sum += num;
  }
  console.log(`The sum of the digits is:${sum}`);
}
sumOfNumbers(["564891"]);
