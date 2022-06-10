function seriesCalculator(input) {
  let name = input[0];
  let seasons = Number(input[1]);
  let episodes = Number(input[2]);
  let duration = Number(input[3]);

  let totalTime = seasons * episodes * duration * 1.2 + seasons * 10;

  console.log(
    `Total time needed to watch the ${name} series is ${totalTime} minutes.`
  );
}
seriesCalculator(["Game of Thrones", "7", "10", "50"]);
