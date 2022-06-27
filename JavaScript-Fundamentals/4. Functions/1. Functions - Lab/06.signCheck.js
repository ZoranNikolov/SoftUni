function signCheck(numOne, numTwo, numThree) {
  let res = (x, y, z) => {
    if (
      (numOne < 0 && numTwo < 0 && numThree < 0) ||
      (numOne < 0 && numTwo >= 0 && numThree >= 0) ||
      (numOne >= 0 && numTwo < 0 && numThree >= 0) ||
      (numOne >= 0 && numTwo >= 0 && numThree < 0)
    ) {
      return "Negative";
    } else {
      return "Positive";
    }
  };
  console.log(res());
}
signCheck(5, 12, -15);
signCheck(-6, -12, 14);
signCheck(-1, -2, -3);
signCheck(-5, 1, 1);
