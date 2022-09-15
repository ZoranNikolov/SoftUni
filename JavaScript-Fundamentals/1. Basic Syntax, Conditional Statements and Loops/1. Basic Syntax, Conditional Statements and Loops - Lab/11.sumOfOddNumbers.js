function solve(num) {
  let sum = 0;
  let index = num;
  let n = 1;

  while (index > 0) {
    if (n % 2 !== 0) {
      sum += n;
      index--;
      console.log(n);
    }
    n++;
  }
  console.log(`Sum: ${sum}`);
}
solve(5);
