function digitsWithWords(string) {
  let res = 0;
  switch (string) {
    case "nine":
      res = 9;
      break;
    case "eight":
      res = 8;
      break;
    case "seven":
      res = 7;
      break;
    case "six":
      res = 6;
      break;
    case "five":
      res = 5;
      break;
    case "four":
      res = 4;
      break;
    case "three":
      res = 3;
      break;
    case "two":
      res = 2;
      break;
    case "one":
      res = 1;
      break;
    case "zero":
      res = 0;
      break;
  }
  console.log(res);
}
digitsWithWords("nine");
digitsWithWords("two");
digitsWithWords("zero");