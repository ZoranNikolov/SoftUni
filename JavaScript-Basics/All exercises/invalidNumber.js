function invalidNumber(input) {
  const num = Number(input[0]);
  if ((100 <= num && num <= 200) || num === 0) {
  } else {
    console.log("invalid");
  }
}
invalidNumber(["220"]);
