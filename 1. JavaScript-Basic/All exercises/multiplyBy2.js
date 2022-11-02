function multiplyBy2(input) {
  let num = Number(input[0]);

  while (num >= 0) {
    num = input.shift();
    if (num < 0) {
      console.log("Negative number!");
      break;
    }
    let result = num * 2;
    console.log(`Result: ${result.toFixed(2)}`);
  }
}

multiplyBy2([
  "12",
  "43.2144",
  "12.3",
  "543.23",
  "-20",
  "23.43",
  "12.3245",
  "0",
  "65.23432",
  "23",
  "65",
  "-12",
  "-123",
]);
