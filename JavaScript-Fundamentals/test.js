function solve(value) {
  let i = 2;
  let high = Number(value[1]);
  let width = Number(value[0]);
  let cake_pleases = high * width;
  let stop_is = false;
  do {
    switch (value[i]) {
      case "STOP":
        stop_is = true;
        break;
      case value[i]:
        let p = Number(value[i]);
        cake_pleases -= p;
        break;
    }
    if (stop_is) {
      break;
    }

    i++;
  } while (i <= value.length - 1);

  if (stop_is) {
    console.log(`${cake_pleases} pieces are left.`);
  } else if (cake_pleases < 0) {
    console.log(
      `No more cake left! You need ${Math.abs(cake_pleases)} pieces more.`
    );
  }
}
solve(["10", "10", "20", "20", "20", "20", "21"]);
solve(["10", "2", "2", "4", "6", "STOP"]);
