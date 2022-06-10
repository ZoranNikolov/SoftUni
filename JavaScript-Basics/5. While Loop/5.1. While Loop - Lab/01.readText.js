function readText(input) {
  let index = 0;

  let str = input[index++];

  while (str !== "Stop") {
    console.log(str);
    str = input[index++];
  }
}
readText([
  "Sofia",
  "Berlin",
  "Moscow",
  "Athens",
  "Madrid",
  "London",
  "Paris",
  "Stop",
  "AfterStop",
]);
