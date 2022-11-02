function gymnastics(input) {
  let country = input[0];
  let tool = input[1];
  let score = 0;

  switch (country) {
    case "Russia":
      switch (tool) {
        case "ribbon":
          score = 9.1 + 9.4;
          break;
        case "hoop":
          score = 9.3 + 9.8;
          break;
        case "rope":
          score = 9.6 + 9;
      }
      break;
    case "Bulgaria":
      switch (tool) {
        case "ribbon":
          score = 9.6 + 9.4;
          break;
        case "hoop":
          score = 9.55 + 9.75;
          break;
        case "rope":
          score = 9.5 + 9.4;
          break;
      }
      break;
    case "Italy":
      switch (tool) {
        case "ribbon":
          score = 9.2 + 9.5;
          break;
        case "hoop":
          score = 9.45 + 9.35;
          break;
        case "rope":
          score = 9.7 + 9.15;
          break;
      }
      break;
  }
  let percent = ((20 - score) / 20) * 100;
  console.log(`The team of ${country} get ${score.toFixed(3)} on ${tool}.`);
  console.log(`${percent.toFixed(2)}%`);
}
gymnastics(["Bulgaria", "ribbon"]);
