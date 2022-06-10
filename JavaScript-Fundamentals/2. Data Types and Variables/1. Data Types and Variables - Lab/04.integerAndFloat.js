function integerAndFloat(num1, num2, num3) {
  let sum = num1 + num2 + num3;
  if (sum % 1 === 0) {
    console.log(`${sum} - Integer`);
  } else {
    console.log(`${sum} - Float`);
  }
}
integerAndFloat(9, 100, 1.1);
integerAndFloat(100, 200, 303);
