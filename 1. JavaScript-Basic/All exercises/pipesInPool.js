function pipesInPool(input) {
  const poolVolume = Number(input[0]);
  const debitPipe1 = Number(input[1]);
  const debitPipe2 = Number(input[2]);
  const hours = Number(input[3]);

  const waterFlownPipe1 = debitPipe1 * hours;
  const waterFlownPipe2 = debitPipe2 * hours;
  const totalFlown = waterFlownPipe1 + waterFlownPipe2;

  const pipe1Percent = waterFlownPipe1 / totalFlown * 100;
  const pipe2Percent = waterFlownPipe2 / totalFlown * 100;

  const litresDifference = Math.abs(poolVolume - totalFlown);

  if (totalFlown <= poolVolume) {
    const poolFillPercent = totalFlown / poolVolume * 100;
    console.log(
      `The pool is ${poolFillPercent.toFixed(2)}% full. Pipe 1: ${pipe1Percent.toFixed(2)}%. Pipe 2: ${pipe2Percent.toFixed(2)}%.`
    );
  } else {
    console.log(
      `For ${hours.toFixed(2)} hours the pool overflows with ${litresDifference.toFixed(2)} liters.`
    );
  }
}
pipesInPool(["100", "100", "100", "2.5"]);
