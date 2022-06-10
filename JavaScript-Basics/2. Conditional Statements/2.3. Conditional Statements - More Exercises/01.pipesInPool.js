function pipesInPool(input) {
  let volume = Number(input[0]);
  let p1 = Number(input[1]);
  let p2 = Number(input[2]);
  let hours = Number(input[3]);

  let p1Total = p1 * hours;
  let p2Total = p2 * hours;
  let totalFilling = p1Total + p2Total;
  let p1Percent = (p1Total / totalFilling) * 100;
  let p2Percent = (p2Total / totalFilling) * 100;
  let totalFillPercent = (totalFilling / volume) * 100;
  let diff = Math.abs(volume - totalFilling);

  if (volume >= totalFilling) {
    console.log(
      `The pool is ${totalFillPercent.toFixed(
        2
      )}% full. Pipe 1: ${p1Percent.toFixed(2)}%. Pipe 2: ${p2Percent.toFixed(
        2
      )}%.`
    );
  } else {
    console.log(`For ${hours} hours the pool overflows with ${diff} liters.`);
  }
}
pipesInPool(["1000", "100", "120", "3"]);
