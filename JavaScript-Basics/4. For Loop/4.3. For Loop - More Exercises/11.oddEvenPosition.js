function oddEvenPosition(input) {
  let index = 0;
  let nums = Number(input[index++]);
  let currentOddNum = 0;
  let oddSum = 0;
  let oddMin = 0;
  let oddMax = 0;
  let currentEvenNum = 0;
  let evenSum = 0;
  let evenMin = 0;
  let evenMax = 0;

  for (let i = 0; i < nums; i += 2) {
    currentOddNum = Number(input[index++]);
    oddSum += currentOddNum;
    index++;
    if (i === 0) {
      oddMax = currentOddNum;
      oddMin = currentOddNum;
    }
    if (currentOddNum >= oddMax) {
      oddMax = currentOddNum;
    }
    if (currentOddNum <= oddMin) {
      oddMin = currentOddNum;
    }
  }
  index = 2;
  for (let i = 1; i < nums; i += 2) {
    currentEvenNum = Number(input[index++]);
    evenSum += currentEvenNum;
    index++;
    if (i === 1) {
      evenMax = currentEvenNum;
      evenMin = currentEvenNum;
    }
    if (currentEvenNum >= evenMax) {
      evenMax = currentEvenNum;
    }
    if (currentEvenNum <= evenMin) {
      evenMin = currentEvenNum;
    }
  }
  console.log(`OddSum=${oddSum.toFixed(2)},`);
  oddMin != 0
    ? console.log(`OddMin=${oddMin.toFixed(2)},`)
    : console.log(`OddMin=No,`);
  oddMax != 0
    ? console.log(`OddMax=${oddMax.toFixed(2)},`)
    : console.log(`OddMax=No,`);
  console.log(`EvenSum=${evenSum.toFixed(2)},`);
  evenMin != 0
    ? console.log(`EvenMin=${evenMin.toFixed(2)},`)
    : console.log(`EvenMin=No,`);
  evenMax != 0
    ? console.log(`EvenMax=${evenMax.toFixed(2)}`)
    : console.log(`EvenMax=No`);
}
oddEvenPosition(["3", "-1", "-2", "-3"]);

function tradeCommissions2(input){
    let town = (input[0]);
    let sales = Number (input[1]);
    
 
    if (sales >= 0 && sales <= 500){
        if (town == "Sofia"){
            console.log(((sales * 4.5) / 100).toFixed(2));
        } else if (town == "Varna"){
            console.log(((sales * 4.5) / 100).toFixed(2));
        } else if (town == "Plovdiv"){
            console.log(((sales * 5.5) / 100).toFixed(2));
        }
    }
}
tradeCommissions2(["Sofia", "499.99"])