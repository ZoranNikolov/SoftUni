function factorialDivision(first, second) {
  function factorialFirst(first) {
    if (first === 0) {
      return 1;
    }

    return first * factorialFirst(first - 1);
  }

  function factorialSecond(second) {
    if (second === 0) {
      return 1;
    }

    return second * factorialSecond(second - 1);
  }

  let result = factorialFirst(first) / factorialSecond(second);

  console.log(result.toFixed(2));
}
factorialDivision(5, 2);
factorialDivision(6, 2);
