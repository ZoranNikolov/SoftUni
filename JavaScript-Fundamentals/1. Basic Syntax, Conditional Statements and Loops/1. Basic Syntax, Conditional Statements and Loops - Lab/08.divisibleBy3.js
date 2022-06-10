function divisibleBy3(input) {
  for (let index = 1; index <= 100; index++) {
    if (index % 3 === 0) {
      console.log(index);
    }
  }
}
divisibleBy3();