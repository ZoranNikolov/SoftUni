function usdToBgn(input) {
  let dollar = Number(input[0]);
  let bgn = 1.79549;

  let conversion = dollar * bgn;

  console.log(conversion);
}
usdToBgn(["100"]);
