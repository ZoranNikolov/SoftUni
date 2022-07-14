function numbers(sequence) {
  let array = sequence.split(" ").map(Number);
  let average = array.reduce((a, b) => a + b, 0) / array.length;
  let res = array
    .filter((el) => el > average)
    .sort((a, b) => b - a)
    .slice(0, 5)
    .join(" ");
  
    return res.length > 0 ? res : "No";
    
}
console.log(numbers("10 20 30 40 50"));
console.log(numbers("5 2 3 4 -10 30 40 50 20 50 60 60 51"));
console.log(numbers("1"));
console.log(numbers("-1 -2 -3 -4 -5 -6"));
