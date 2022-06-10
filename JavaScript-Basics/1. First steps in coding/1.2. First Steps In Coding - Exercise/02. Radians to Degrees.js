function radiansToDegrees(input) {
  let radian = Number(input[0]);
  let degrees = (radian * 180) / Math.PI;

  console.log(degrees);
}
radiansToDegrees(["6.2832"]);
