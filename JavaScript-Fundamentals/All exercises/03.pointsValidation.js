function pointsValidation(array) {
  let x1 = array[0];
  let y1 = array[1];
  let x2 = array[2];
  let y2 = array[3];
  let isdistanceX1Y1ToCenterValid = "invalid";
  let isdistanceX2Y2ToCenter = "invalid";
  let isdistanceBetweenCoordinates = "invalid";

  let distanceX1Y1ToCenter = (x1, y1) => {
    return Math.sqrt(Math.pow(0 - x1, 2) + Math.pow(0 - y1, 2));
  };

  let distanceX2Y2ToCenter = (x2, y2) => {
    return Math.sqrt(Math.pow(0 - x2, 2) + Math.pow(0 - y2, 2));
  };

  let distanceBetweenCoordinates = (x1, y1, x2, y2) => {
    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
  };

  if (distanceX1Y1ToCenter(x1, y1) === parseInt(distanceX1Y1ToCenter(x1, y1))) {
    isdistanceX1Y1ToCenterValid = "valid";
  }

  if (distanceX2Y2ToCenter(x2, y2) === parseInt(distanceX2Y2ToCenter(x2, y2))) {
    isdistanceX2Y2ToCenter = "valid";
  }

  if (
    distanceBetweenCoordinates(x1, y1, x2, y2) ===
    parseInt(distanceBetweenCoordinates(x1, y1, x2, y2))
  ) {
    isdistanceBetweenCoordinates = "valid";
  }
  console.log(`{${x1}, ${y1}} to {0, 0} is ${isdistanceX1Y1ToCenterValid}`);
  console.log(`{${x2}, ${y2}} to {0, 0} is ${isdistanceX2Y2ToCenter}`);
  console.log(
    `{${x1}, ${y1}} to {${x2}, ${y2}} is ${isdistanceBetweenCoordinates}`
  );
}
pointsValidation([3, 0, 0, 4]);
pointsValidation([2, 1, 1, 1]);
