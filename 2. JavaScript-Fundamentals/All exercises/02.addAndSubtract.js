function main(first, second, third) {
  let sumFirstAndSecond = sum(first, second);
  let finalResult = subtract(sumFirstAndSecond, third);
  console.log(finalResult);

  function sum(first, second) {
    return first + second;
  }

  function subtract(firstResult, thirdNumber) {
    return sumFirstAndSecond - thirdNumber;
  }
}

main(23, 6, 10);
