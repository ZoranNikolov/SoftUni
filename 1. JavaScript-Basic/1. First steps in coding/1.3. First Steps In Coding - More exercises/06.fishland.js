function fishland(input) {
  let index = 0;
  let skumriaPrice = Number(input[index++]);
  let cacaPrice = Number(input[index++]);
  let palamudKg = Number(input[index++]);
  let safridKg = Number(input[index++]);
  let midiKg = Number(input[index++]);

  let palamudPrice = skumriaPrice + (skumriaPrice * 60) / 100;
  let safridPrice = cacaPrice + (cacaPrice * 80) / 100;
  let midiPrice = 7.5;

  let totalSum =
    palamudKg * palamudPrice + safridKg * safridPrice + midiKg * midiPrice;

  console.log(totalSum.toFixed(2));
}
fishland(["6.90", "4.20", "1.5", "2.5", "1"]);
