function specialNumbers(num) {
  for (let i = 1; i <= num; i++) {
    let sum = i % 10;
    sum += parseInt(i / 10);
    if (sum === 5 || sum === 7 || sum === 11) {
      console.log(`${i} -> True`);
    } else {
      console.log(`${i} -> False`);
    }
  }
}
// specialNumbers(15);
specialNumbers(20);