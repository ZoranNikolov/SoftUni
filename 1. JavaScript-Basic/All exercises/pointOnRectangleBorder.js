function pointOnRectangleBorder(input) {
  const x1 = Number(input[0]);
  const y1 = Number(input[1]);
  const x2 = Number(input[2]);
  const y2 = Number(input[3]);
  const x = Number(input[4]);
  const y = Number(input[5]);

  let position = "";

  if (x === x1 || x === x2) {
    if (y >= y1 && y <= y2) {
      position = "Border";
    } else {
      position = "Inside / Outside";
    }
  } else if (y === y1 || y === y2) {
    if (x >= x1 && x <= x2) {
      position = "Border";
    } else {
      position = "Inside / Outside";
    }
  } else {
    position = "Inside / Outside";
  }

  console.log(`${position}`);
}
pointOnRectangleBorder(["2", "-3", "12", "3", "8", "-1"]);
pointOnRectangleBorder(["2", "-3", "12", "3", "12", "-1"]);
pointOnRectangleBorder(["2", "-3", "12", "3", "1", "3"]);
pointOnRectangleBorder(["2", "-3", "12", "3", "12", "-5"]);
