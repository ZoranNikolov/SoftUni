function housePainting(input) {
  let x = Number(input[0]);
  let y = Number(input[1]);
  let h = Number(input[2]);

  let greenPaint = 1 / 3.4;
  let redPaint = 1 / 4.3;

  let door = 2 * 1.2;
  let window = 1.5 * 1.5;

  let sideWalls = 2 * (y * x - window);
  let frondAndBackWalls = 2 * (x * x) - door;

  let roof = 2 * (y * x) + 2 * ((h * x) / 2);

  let greenPaintTotal = (sideWalls + frondAndBackWalls) * greenPaint;
  let redPaintTotal = roof * redPaint;

  console.log(greenPaintTotal.toFixed(2));
  console.log(redPaintTotal.toFixed(2));
}
housePainting(["6", "10", "5.2"]);
