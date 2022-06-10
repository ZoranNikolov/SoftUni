function triangleOfNumbers(n) {
  for (let i = 1; i <= n; i++) {
    let printLine = "";
    for (let j = 1; j <= i; j++) {
      printLine += i + " ";
      if (i === j) {
        console.log(printLine);
      }
    }
    printLine = "";
  }
}
triangleOfNumbers(3);
triangleOfNumbers(5);
triangleOfNumbers(6);