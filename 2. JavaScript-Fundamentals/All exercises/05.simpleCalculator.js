function simpleCalculator(numOne, numTwo, operator) {
  let res;

  switch (operator) {
    case "multiply":
      res = (x, y) => numOne * numTwo;
      break;
    case "divide":
      res = (x, y) => numOne / numTwo;
      break;
    case "add":
      res = (x, y) => numOne + numTwo;
      break;
    case "subtract":
      res = (x, y) => numOne - numTwo;
      break;
  }
  console.log(res());
}
simpleCalculator(5, 5, "multiply");
simpleCalculator(40, 8, "divide");
simpleCalculator(12, 19, "add");
simpleCalculator(50, 13, "subtract");
