function easterLunch(input) {
  let countKoz = Number(input[0]);
  let countEggs = Number(input[1]);
  let cookiesKg = Number(input[2]);

  let result =
    countKoz * 3.2 + countEggs * 4.35 + countEggs * 12 * 0.15 + cookiesKg * 5.4;

  console.log(result.toFixed(2));
}
easterLunch(["3", "2", "3"]);
