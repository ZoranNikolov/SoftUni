function movieDay(input) {
  let time = Number(input[0]);
  let scenes = Number(input[1]);
  let duration = Number(input[2]);

  let timeToShoot = scenes * duration + time * 0.15;
  let diff = Math.abs(time - timeToShoot);
  if (timeToShoot < time) {
    console.log(
      `You managed to finish the movie on time! You have ${diff.toFixed()} minutes left!`
    );
  } else {
    console.log(
      `Time is up! To complete the movie you need ${diff.toFixed()} minutes.`
    );
  }
}
movieDay(["120", "10", "11"]);
