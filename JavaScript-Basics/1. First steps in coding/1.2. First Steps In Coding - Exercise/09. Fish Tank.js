function fishTank(input) {
  let lenghtCm = Number(input[0]);
  let widthCm = Number(input[1]);
  let heightCm = Number(input[2]);
  let percent = Number(input[3]);

  let volume = lenghtCm * widthCm * heightCm;
  volume = volume - (volume * percent) / 100;

  let litres = volume / 1000;

  console.log(litres);
}
fishTank(["105 ", "77 ", "89 ", "18.5 "]);