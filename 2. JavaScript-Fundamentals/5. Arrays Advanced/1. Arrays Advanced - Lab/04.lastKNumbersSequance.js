function lastKNumbersSequance(n, k) {
  let res = [1];

  for (let i = 0; i < n - 1; i++) {
    let sequence = res.slice(-k);
    let sum = 0;

    for (let el of sequence) {
      sum += el;
    }
    res.push(sum);
  }
  console.log(res.join(" "));
}
lastKNumbersSequance(6, 3);
lastKNumbersSequance(8, 2);
