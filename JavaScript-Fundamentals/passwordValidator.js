function solve(input) {
  let index = 0;
  let currentMoney = Number(input[index]);
  let sum = 0;
  
  while (currentMoney !== "NoMoreMoney") {
    currentMoney = Number(input[index]);
    if (currentMoney < 0) {
      console.log("Invalid operation!");
    } else {
      console.log(`Increase: ` + currentMoney.toFixed(2));
      sum += currentMoney;
    }
    if (index >= (input.length) - 1) {
      break;
    }
    index++;
    currentMoney = (input[index])
  }
  console.log("Total: " + sum.toFixed(2))
}

solve(["5.51", 

  "69.42", 

  "100",

  "NoMoreMoney"]);