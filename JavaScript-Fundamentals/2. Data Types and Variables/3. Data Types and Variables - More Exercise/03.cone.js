function cone(radius, height) {
  let V = (1 / 3) * Math.PI * Math.pow(radius, 2) * height;
  let area =
    Math.PI *
    radius *
    (radius + Math.sqrt(Math.pow(radius, 2) + Math.pow(height, 2)));

  console.log(`volume = ${V.toFixed(4)}`);
  console.log(`area = ${area.toFixed(4)}`);
}
cone(3, 5);
cone(3.3, 7.8);
