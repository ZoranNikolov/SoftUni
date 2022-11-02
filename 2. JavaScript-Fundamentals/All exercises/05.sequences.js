function sequences(input) {
  input = input
    .map(JSON.parse)
    .map((el) => el.sort((a, b) => b - a))
    .map(JSON.stringify);
  [...new Set(input)]
    .map(JSON.parse)
    .sort((a, b) => a.length - b.length)
    .forEach((el) => console.log(`[${el.join(", ")}]`));
}
sequences([
  "[-3, -2, -1, 0, 1, 2, 3, 4]",
  "[10, 1, -17, 0, 2, 13]",
  "[4, -3, 3, -2, 2, -1, 1, 0]",
]);
