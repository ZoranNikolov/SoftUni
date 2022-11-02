function sumSeconds(input) {
  const firstTime = Number(input[0]); // 35
  const secondTime = Number(input[1]); // 45
  const thirdTime = Number(input[2]); // 44

  const totalTime = firstTime + secondTime + thirdTime; // 124

  let minutes = totalTime / 60;
  let seconds = totalTime % 60;
  let hours = totalTime
  
//   let minutes = 0;
//   let seconds = totalTime % 60;

//   if (totalTime >= 120) {
//     minutes = 2;
//     seconds = totalTime - 120;
//   } else if (totalTime >= 60) {
//     //65
//     minutes = 1;
//     seconds = totalTime - 60; //5
//   } else {
//     seconds = totalTime;
//   }

  if (seconds < 10) {
    console.log(`${Math.floor(minutes)}:0${seconds}`);
  } else {
    console.log(`${Math.floor(minutes)}:${seconds}`);
  }
}

sumSeconds(["35", "45", "44"]);
